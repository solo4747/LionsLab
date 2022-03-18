import * as React from 'react';
import { StyleSheet, Image, FlatList, ActivityIndicator, Pressable} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Dialog from "react-native-dialog";
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Objectif from '../Objectif';
import { Player } from '../../src/models';
import { useEffect, useState } from 'react';
import AddObjectif from '../ObjectifList/AddObjectif';
import Objectifs from '../Objectif';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { API, graphqlOperation } from 'aws-amplify';
import { getObjectif, listMissions, listTasks } from '../../src/graphql/queries';
import { createTask } from '../../src/graphql/mutations';



interface PlayerInterface{  
    // Je definis un objet de type categorie et maintenant le type "category est utilisable dans mon code"
    player: Player,    
  }

  
   
    export default function Challenges( {plr, s}) {
      const [mission, setMission] = useState([]);
      const navigation = useNavigation();
      let temp: any[] = ([])
      let a: any[] = ([]) 
      var arr: any[] = ([])
      const [visible, setVisible] = useState(false);
      var bool = false
      const [allTasks, setAllTasks] =  useState(); 
      const [isLoading, setLoading] = useState(true)
      
      
      useEffect(() => {

        const load = async () => 
        
      { 
        var p1 = plr
        s(p1)
       
   
      
              const tasks = await API.graphql(graphqlOperation(listTasks)); 
            

              setAllTasks(tasks)
        

              // const m = await API.graphql(graphqlOperation(listMissions));

              const m = await API.graphql(graphqlOperation(listMissions, {
                filter: {
                    playerID: {eq: plr.id},
                }
            } ))
           
              let tempBis: any[] = ([])      
              temp = (m.data.listMissions.items)
              
            
                      
                      temp.forEach(function(object) {
                    
                        if ( object.afficherMission)
                        {
                         tempBis.push(object)
                        }
                      })

                // Pas la peine de faire un SetMission si aucune mission n'a le statut pour etre affichée
                if (tempBis.length !=0){
                    
                  setMission(tempBis)   
                }
                setLoading(false)      
              };
        load()

      }, []);
      
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
if(!isLoading ){



        const listeTaches =  async () => {

          // const allTasks = await API.graphql(graphqlOperation(listTasks)); 
          arr = allTasks.data.listTasks.items
  
 
         
          //mission
          mission.forEach(function(objetMission) {

                const find = arr.find(element => element.missionID === objetMission.id)
         
                  // Est ce qu'une tache avec ce numero de mission existe deja ? Si oui 
                  if(find){
                    console.log('les taches sont bien chargées')
                                  arr.forEach(function(oneTask){
                                    if( oneTask.missionID === objetMission.id){  

                                    
                                      a.push(oneTask) } //If
                              }); //forEach
                            }

                  else{
            // Est ce qu'une tache avec ce numero de mission existe deja ? Si non 
            //Je vais chercher dans le tableau des tâches quelles sont les taches d'origine (O) et j'en cree une copie pour l'utilisateur.
            arr.forEach(async function(oneTask){
                    

                  if(oneTask.objectifID === objetMission.objectif && oneTask.missionID === 'O'){
                     
             
                   
           
                  const addTask = await API.graphql({ query: createTask, variables: {input: {
                
                    missionID : objetMission.id,
                    name: oneTask.name,
                    objectifID: oneTask.objectifID,
                    status: false,
                    type : 'task',
                    comment : false,
                    commentNote: "",
                    description: oneTask.description
                  }}})  
         
                  a.push(addTask) 
              
                 
                } //If

         
            }); //forEach
      
           } //else
            
   
           })  // mission forEach    
         
        }; 

        listeTaches()
      
      }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        const onObjectifPress = async (miss) => {

          if (miss.status){
  
                setVisible(true)    // Tu as deja cloturé cette mission !
          }
          
          
          else{
                
          // verifie si les taches en rapport avec la mission sont telechargées dans l'appli ou pas.
             a.forEach(function (element){
  
                    //elles sont telechargees. Je peux naviguer vers tabFive            
                    if(element.type === 'task')  bool = true;
                    
             })
  
            
             if(!bool){
            //elles ne sont pas chargeés donc je vais les récuperer.
            arr = allTasks.data.listTasks.items
               
                    // l'application va selectionner les taches inhérentes à la mission et les ajouter au tableau
                    arr.forEach(function(oneTask){
                      if( oneTask.missionID === miss.id){  
                        a.push(oneTask) } //If
        }); //forEach
                
                        a.push(miss)
                        a.push(plr)
                      
            
      {navigation.navigate('TabFiveScreen', a)}
  
      }// IF
  
            // les taches sont chargées il ne reste plus qu'à les envoyer vers la TabFive avec le reste des données.
            else{               
                      a.push(miss)
                      a.push(plr)
                  
                 
                {navigation.navigate('TabFiveScreen', a)}
  
            } //ELSE
          a = ([])
          bool = false
  
  }// 1er else
       
  
  }   

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const handleSelection = () => {setVisible(false)};  

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    ///////////////////////////////////////////////////////////   RETURN  ////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     if (isLoading){

            return(
              <View style={styles.containerSpinner}>

              <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />
               
               <Text style={styles.title}>CHALLENGES</Text>
               
                 
               <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />



                        <ActivityIndicator size="large" color="#D7BE69" />

                        <Text style={styles.legende}>Chargement</Text>

              </View>
            )

     }

     else{

           
           if (mission.length != 0 ){

            
        return (
       
        <View style={styles.container}>

            <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />
               
            <Text style={styles.title}>CHALLENGES</Text>
            
              
            <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />

            
                
               
                        <FlatList                                              
                                // data={plr.objectifs.items}
                                data={mission}
                                renderItem={({item}) => 
                                
                                
                                <Pressable onPress={() => onObjectifPress(item)}>  

                                {/* <Objectifs  objectif={item}/> */}
                                <Objectifs  mission={item}/>
                                </Pressable>
                                
                                
                                
                                }
                        /> 

                                                <Dialog.Container visible={visible}>
                                                        <Dialog.Title></Dialog.Title>
                                                        <Dialog.Description>
                                                         Objectif accompli ! 
                                                        </Dialog.Description>
                                                        <Dialog.Button label="OK" onPress={handleSelection} />
                                                        
                                                      
                                                        
                                                </Dialog.Container> 
              
            </View>
   


       
      )}


      return (
        <View style={styles.container}>
            <AddObjectif p={plr}  s1={s} />  
       </View>     
      )

}

      
    }



    const styles = StyleSheet.create({
            
        container: {
            flex: 1,
            
          },
          container1: {
            flex:2,
            
            marginLeft:10
          },
          container2: {
            flex:1,
          
            alignItems:'center',
            justifyContent:'center'
          },


          title: {
           textAlign:'center',
           fontStyle: 'italic',
           fontWeight: 'bold',
           fontSize: 35,
           opacity: .5,
           letterSpacing: 6
        },
        element0: {
            marginTop:10,
            marginBottom: 10  
        },
        element1: {
            marginBottom: 10,
            

         },
         element2:{
            textAlign:'center',
           fontStyle: 'italic',
           opacity: .5,
           letterSpacing: 6,
           
        },

            separator: {
                
            marginVertical: 10,
            height: 1,
            width: '75%',
        },

        separator1: {
                
            marginVertical: 5,
            height: 1,
            width: '100%',
        },
       
        challengeContainer:{
         
            flexDirection:'row',
            // justifyContent:'center',
            // alignItems:'center'
 
         },

         containerSpinner: {
          flex: 1,
          justifyContent: "center",
        
        },
        legende: {
          textAlign:'center',
          fontStyle: 'italic',
          opacity: .5,
          color : '#D7BE69',
       
       },
      });





