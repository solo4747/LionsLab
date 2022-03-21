import * as React from 'react';
import { StyleSheet, Modal, FlatList, TouchableOpacity, Alert} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Text, View } from '../Themed';
import { useEffect, useState } from 'react';
import { AirbnbRating } from 'react-native-ratings';
import ObjectifBis from '../ObjectifBis';
import Dialog from "react-native-dialog";
import { API, graphqlOperation } from 'aws-amplify';
import { listObjectifs, listTasks } from '../../src/graphql/queries';
import { Objectif } from '../../src/models';
import { Player } from '../../src/models';
import Challenges from '../Challenges';
import { useNavigation } from '@react-navigation/native';
import { createMission, createTask, updatePlayer } from '../../src/graphql/mutations';

interface ObjectifInterface{  
  
  o: Objectif
}

interface PlayerInterface{  
  
  player: Player,    
}

// { id:'1', title: 'ne pas encaisser', difficulté: 3, niveauActuel: 0, niveauMax:0, progressBar:0}
   
    export default function AddObjectif({p, s1}) {

       

        const [allObjectif, setObj] = useState([]);
      
        var t1:  any[] | null | undefined = []; 
        var t2:  any[] | null | undefined = [];  
        var t3:  any[] | null | undefined = [];  
        var t4:  any[] | null | undefined = [];   
        
        var [tempObj, setTemp] = useState();
        const [tempArray, setTempArray] = useState([]);  
        const [isAvailable , setBool] = useState(true);   // if true le bouton VALIDER est désactivé. If FALSE : il s'active et je peux valider.
        const [visible, setVisible] = useState(false);   // Es tu certain de vouloir relever ce challenge. Ouvrir ou fermer cet ecran.
        const [modalOpen, setModalOpen] = useState(false);
        const navigation = useNavigation();
       
       
      const showDialog = (object: Objectif | null) => 
      {
          
        if(tempArray.length==2) {}

        else if(object?.difficulte == 3 && p.nombreDePointsActuel < 1500)
          {
            let str = 'Pas si vite ';
                       str += p.name;
            Alert.alert(str,'Il te faut un minimum de 1500 pts pour attaquer les objectifs 3 étoiles.')
          }

        else
          {  
                  setTemp(object)
                  setVisible(true)
          }
      }
            
              const handleCancel = () => {
                setVisible(false);
              };
            
              const handleSelection = () => {
              
                tempArray.push(tempObj)
                
                        if(tempArray.length==2){
                                  
                          setBool(false);     
                          setVisible(false); 
                        }


                        else{ setVisible(false);}
                
              }; 
              
              const terminate =  () =>  {
              
                   var p1 = p
                   let arr = ([])
                   let arr1: any[] = ([])
            
                tempArray.forEach(async function(obje) {

                  const addMission = await API.graphql({ query: createMission, variables: {input: {
                                   
                    objectif: obje.id,
                    name: obje.name,
                    description: '',
                    difficulte: obje.difficulte,
                    niveauActuel: obje.niveauActuel,
                    niveauMax: obje.niveauMax,
                    progressBar: obje.progressBar,
                    playerID: p1.id,
                    categorie: obje.categorie,
                    status : false,
                    afficherMission : true,
                    type : 'mission'
                  }}})
               
          
                 
                 
               
              
                  /////////////////////////////////////// UPDATE LES OBJECTIFS DANS L'OBJET JOUEUR//////////////////////////////////
                  p1.objectifs.items.push(obje)
                })

        
                Alert.alert('Ton choix est bien validé. Au travail maintenant ! ')
                s1(p1)
                {navigation.navigate('TabThreeScreen')}
                setModalOpen(false)
              }; 


              const annuler = () => {
                   setTempArray([]) 
                   setBool(true)  
                           
              }; 

              const annuler1 = () => {
                setTempArray([]) 
                setBool(true)  
                setModalOpen(false)   
           }; 

              useEffect(() => {
                let isMounted = true; 

                const fetchObjectif = async () => 
              {

            
                  
                    const objectifs = await API.graphql(graphqlOperation(listObjectifs))
                    
                   
                    if (isMounted) {setObj(objectifs.data.listObjectifs.items);};    // add conditional check
  
                    
                    return () => { isMounted = false };;
                    
                };
            
                fetchObjectif()
              }, []);
              
        const allocation = () => {
    

              allObjectif.forEach(function(object) {
               
                     if ( object.categorie == 1)
                      {
                            t1.push(object)
                            
                      }

                      else if (object.categorie == 2)
                      {
                        t2.push(object)
                      }

                      else if (object.categorie == 3)
                      {
                        t3.push(object)
                      }

                      else if (object.categorie == 4)
                      {
                        t4.push(object)
                      }

                      t1.sort(function(a, b) {return parseFloat(a.difficulte) - parseFloat(b.difficulte)})
                      t2.sort(function(a, b) {return parseFloat(a.difficulte) - parseFloat(b.difficulte)})
                      t3.sort(function(a, b) {return parseFloat(a.difficulte) - parseFloat(b.difficulte)})
                      t4.sort(function(a, b) {return parseFloat(a.difficulte) - parseFloat(b.difficulte)})
            });

       
         };

         allocation()

  if(p.nombreDePointsActuel < 1500)  { 
        return (
       
        <View style={styles.container}>

                <Modal visible={modalOpen} animationType='slide'>
                        <View style={styles.container}>
                                <MaterialIcons 
                                    name='close'
                                    size={35} 
                                    style={{marginBottom: 10 }}
                                    color={'white'}
                                    onPress={() => annuler1()} 
                                />

                                    <View style={{flex:1, flexDirection:'row'}}>



                                            <View style={{flex:1,}}> 
                                                 <Text style={styles.title1}>MENTAL</Text>  
                                                 
                                                        
                                                <FlatList data= {t1} 
                                                      style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}}   
                                                renderItem={({item}) =>   (
                                                        <TouchableOpacity 
                                                            
                                                          onPress={() => showDialog(item)}
                                                          
                                                        >
                                                                <ObjectifBis objectif={item} show={true}/>
                                                        </TouchableOpacity>                                                       
                                         
                                                       
                                                )}/>   

                                               
                                                                        
                                            </View>    

                                            <View style={{flex:1}}>
                                                 <Text style={styles.title1}>PHYSIQUE</Text>  

                                                 <FlatList data= {t2} 
                                                        style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}} 
                                                
                                                                renderItem={({item}) => 

                                                                <TouchableOpacity onPress={() => showDialog(item)}>   
                                                                
                                                                
                                                                    <ObjectifBis objectif={item} show={true}/>

                                                                </TouchableOpacity>  
                                                                 }/>
                                                           
                                            </View>                         
                                    </View>     


                                    <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                                         
                                            <View style={{flex:1}}> 
                                                 <Text style={styles.title1}>TACTIQUE</Text>  

                                                                <FlatList data= {t3} 

                                                                style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5, opacity:0.2}} 
                                                                renderItem={({item}) => 
                                                                
                                                                <TouchableOpacity>   
                                                                    <ObjectifBis objectif={item} show={false}/>
                                                                </TouchableOpacity>  
                                                                
                                                                }/>
                                            </View>    

                                            <View style={{flex:1}}>
                                                 <Text style={styles.title1}>TECHNIQUE</Text>
                                                                <FlatList data= {t4} 

                                                                style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5, opacity:0.2}} 
                                                                renderItem={({item}) => 
                                                                
                                                                
                                                                <TouchableOpacity >   
                                            
                                                                    <ObjectifBis objectif={item} show={false}/>

                                                                </TouchableOpacity>  
                                                                
                                                                
                                                                }/>  
                                            </View>  

                                             <Dialog.Container visible={visible}>
                                                        <Dialog.Title>Account delete</Dialog.Title>
                                                        <Dialog.Description>
                                                         Es-tu bien certain de vouloir relever ce challenge ? 
                                                         En es-tu capable ?
                                                        </Dialog.Description>
                                                        <Dialog.Button label="YES let's go" onPress={handleSelection} />
                                                        <Dialog.Button label="J'en prends un autre" onPress={handleCancel} />
                                                        
                                                </Dialog.Container>                            
                                    </View>  

                           
                                    <TouchableOpacity onPress={terminate} disabled={isAvailable}>
                                          <Text style={{fontSize:25,alignSelf:'center', marginBottom:25}}> {isAvailable ? 'Valider tes 2 objectifs' : "Valider ta selection"}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={annuler}>
                                          <Text style={{fontSize:25,alignSelf:'center', marginBottom:25}}>Annuler tes choix</Text>
                                    </TouchableOpacity>

                       
                            
                       </View>
                </Modal> 

            
               <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />
               
                             <Text style={styles.title}>CHALLENGES</Text>
   
               <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />

          

                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

                              <MaterialIcons  name='add' color={'white'} size={50} onPress={() => setModalOpen(true)}/> 
                              <Text style={styles.legende}>Ta liste de challenges est vide. Rajoute toi des objectifs pour évoluer!!</Text>
                </View>

        </View>

      ); // RETURN

  } //IF

  else if (p.nombreDePointsActuel >= 1500 && p.nombreDePointsActuel < 3000) {

    return (
       
      <View style={styles.container}>

              <Modal visible={modalOpen} animationType='slide'>
                      <View style={styles.container}>
                              <MaterialIcons 
                                  name='close'
                                  size={35} 
                                  style={{marginBottom: 10 }}
                                  color={'white'}
                                  onPress={() => annuler1()} 
                              />

                                  <View style={{flex:1, flexDirection:'row'}}>



                                          <View style={{flex:1,}}> 
                                               <Text style={styles.title1}>MENTAL</Text>  
                                               
                                                      
                                              <FlatList data= {t1} 
                                                    style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}}   
                                              renderItem={({item}) =>   (
                                                      <TouchableOpacity onPress={() => showDialog(item)}>
                                                              <ObjectifBis objectif={item} show={true}/>
                                                      </TouchableOpacity>                                                       
                                       
                                                     
                                              )}/>   

                                             
                                                                      
                                          </View>    

                                          <View style={{flex:1}}>
                                               <Text style={styles.title1}>PHYSIQUE</Text>  

                                               <FlatList data= {t2} 
                                                      style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}} 
                                              
                                                              renderItem={({item}) => 

                                                              <TouchableOpacity onPress={() => showDialog(item)}>        
                                                                  <ObjectifBis objectif={item} show={true}/>
                                                              </TouchableOpacity>  
                                                               }/>
                                                         
                                          </View>                         
                                  </View>     


                                  <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                                          <View style={{flex:1}}> 
                                               <Text style={styles.title1}>TACTIQUE</Text>  

                                                              <FlatList data= {t3} 

                                                              style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}} 
                                                              renderItem={({item}) => 
                                                              
                                                              <TouchableOpacity onPress={() => showDialog(item)}>   
                                                            
                                                                  <ObjectifBis objectif={item} show={true}/>

                                                              </TouchableOpacity>  
                                                              
                                                              }/>
                                          </View>    

                                          <View style={{flex:1}}>
                                               <Text style={styles.title1}>TECHNIQUE</Text>
                                                              <FlatList data= {t4} 

                                                              style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5, opacity:0.2}} 
                                                              renderItem={({item}) => 
                                                              
                                                              
                                                              <TouchableOpacity >   
                                                              
                                                                  <ObjectifBis objectif={item} show={false}/>

                                                              </TouchableOpacity>  
                                                              
                                                              
                                                              }/>  
                                          </View>  

                                           <Dialog.Container visible={visible}>
                                                      <Dialog.Title>Account delete</Dialog.Title>
                                                      <Dialog.Description>
                                                       Es-tu bien certain de vouloir relever ce challenge ? 
                                                       En es-tu capable ?
                                                      </Dialog.Description>
                                                      <Dialog.Button label="YES let's go" onPress={handleSelection} />
                                                      <Dialog.Button label="J'en prends un autre" onPress={handleCancel} />
                                                      
                                              </Dialog.Container>                            
                                  </View>  

                         
                                  <TouchableOpacity onPress={terminate} disabled={isAvailable}>
                                        <Text style={{fontSize:25,alignSelf:'center', marginBottom:25}}> {isAvailable ? 'Choisis 2 objectifs' : "Annule ta selection"}</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity onPress={annuler}>
                                        <Text style={{fontSize:25,alignSelf:'center', marginBottom:25}}>Annuler ta selection</Text>
                                  </TouchableOpacity>

                     
                          
                     </View>
              </Modal> 

          
             <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />
             
                           <Text style={styles.title}>CHALLENGES</Text>
 
             <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />

        

              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

                            <MaterialIcons  name='add' color={'white'} size={50} onPress={() => setModalOpen(true)}/> 
                            <Text style={styles.legende}>Ta liste est vide. Rajoute toi des objectifs pour évoluer!!</Text>
              </View>

      </View>

    ); // RETURN



  }

  else {

    return (
       
      <View style={styles.container}>

              <Modal visible={modalOpen} animationType='slide'>
                      <View style={styles.container}>
                              <MaterialIcons 
                                  name='close'
                                  size={35} 
                                  style={{marginBottom: 10 }}
                                  color={'white'}
                                  onPress={() => annuler1()} 
                              />

                                  <View style={{flex:1, flexDirection:'row'}}>



                                          <View style={{flex:1,}}> 
                                               <Text style={styles.title1}>MENTAL</Text>  
                                               
                                                      
                                              <FlatList data= {t1} 
                                                    style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}}   
                                              renderItem={({item}) =>   (
                                                      <TouchableOpacity onPress={() => showDialog(item)}>
                                                              <ObjectifBis objectif={item} show={true}/>
                                                      </TouchableOpacity>                                                       
                                       
                                                     
                                              )}/>   

                                             
                                                                      
                                          </View>    

                                          <View style={{flex:1}}>
                                               <Text style={styles.title1}>PHYSIQUE</Text>  

                                               <FlatList data= {t2} 
                                                      style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}} 
                                              
                                                              renderItem={({item}) => 

                                                              <TouchableOpacity onPress={() => showDialog(item)}>        
                                                                  <ObjectifBis objectif={item} show={true}/>
                                                              </TouchableOpacity>  
                                                               }/>
                                                         
                                          </View>                         
                                  </View>     


                                  <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                                          <View style={{flex:1}}> 
                                               <Text style={styles.title1}>TACTIQUE</Text>  

                                                              <FlatList data= {t3} 

                                                              style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}} 
                                                              renderItem={({item}) => 
                                                              
                                                              <TouchableOpacity onPress={() => showDialog(item)}>   
                                                            
                                                                  <ObjectifBis objectif={item} show={true}/>

                                                              </TouchableOpacity>  
                                                              
                                                              }/>
                                          </View>    

                                          <View style={{flex:1}}>
                                               <Text style={styles.title1}>TECHNIQUE</Text>
                                                              <FlatList data= {t4} 

                                                              style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}} 
                                                              renderItem={({item}) => 
                                                              
                                                              
                                                              <TouchableOpacity onPress={() => showDialog(item)}>   
                                                              
                                                                  <ObjectifBis objectif={item} show={true}/>

                                                              </TouchableOpacity>  
                                                              
                                                              
                                                              }/>  
                                          </View>  

                                           <Dialog.Container visible={visible}>
                                                      <Dialog.Title>Menu Objectif</Dialog.Title>
                                                      <Dialog.Description>
                                                       Es-tu bien certain de vouloir relever ce challenge ? 
                                                       En es-tu capable ?
                                                      </Dialog.Description>
                                                      <Dialog.Button label="YES let's go" onPress={handleSelection} />
                                                      <Dialog.Button label="J'en prends un autre" onPress={handleCancel} />
                                                      
                                              </Dialog.Container>                            
                                  </View>  

                         
                                  <TouchableOpacity onPress={terminate} disabled={isAvailable}>
                                        <Text style={{fontSize:25,alignSelf:'center', marginBottom:25}}> {isAvailable ? 'Choisis 2 objectifs' : "Annule ta selection"}</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity onPress={annuler}>
                                        <Text style={{fontSize:25,alignSelf:'center', marginBottom:25}}>Annuler ta selection</Text>
                                  </TouchableOpacity>

                     
                          
                     </View>
              </Modal> 

          
             <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />
             
                           <Text style={styles.title}>CHALLENGES</Text>
 
             <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />

        

              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

                            <MaterialIcons  name='add' color={'white'} size={50} onPress={() => setModalOpen(true)}/> 
                            <Text style={styles.legende}>Ta liste est vide. Rajoute toi des objectifs pour évoluer!!</Text>
              </View>

      </View>

    ); // RETURN



  }


    }



    const styles = StyleSheet.create({
            
        container: {
            flex: 1,
          
          },

          separator1: {
                
            marginVertical: 5,
            height: 1,
            width: '100%',
        },
        title: {
            textAlign:'center',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: 35,
            opacity: .5,
            letterSpacing: 6
         },
         legende: {
                textAlign:'center',
                fontStyle: 'italic',
                opacity: .5,
             },
         title1: {
            alignSelf:'center',
            fontStyle: 'italic',
            fontWeight: 'bold',
           
         },
 
  
      });