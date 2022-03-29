import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Image, ImageBackground, Pressable, Modal, Alert, TouchableOpacity, TextInput, TouchableHighlight, Button, SafeAreaView, Dimensions, Platform } from 'react-native';
import objectifs from '../assets/data/objectifs';
import Dialog from "react-native-dialog";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Navigation from '../navigation';
import { KeycodeInput } from 'react-native-keycode';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createMission, updateMission, updateObjectif, updatePlayer, updateTask } from '../src/graphql/mutations';
import { Player } from '../src/models';
import { getObjectif } from '../src/graphql/queries';
import { showMessage, hideMessage } from "react-native-flash-message";

export default function TabFiveScreen() {
      
      const route = useRoute();
      var propss = ([])
      propss = route.params

    const [writeQuery, setWriteQuery] = useState(false); // Autorise l'execution d'un query graphQl vers AWS.
  
  //route.params.tasks.items
    const [miss, setMission] = useState(propss.find(element => element.type === 'mission'));
    const [obj, setObj] = useState();
    // const [tasks, setTasks] = useState(route.params[2].data.getObjectif.tasks.items);
    const [tasks, setTasks] = useState();
    const [p, setP] = useState(propss.find(element => element.type === 'player'));
    const [value, setValue] = useState('');
    const [numeric, setNumeric] = useState(false);
    const [isAvailable , setBool] = useState(true);
    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [visib, setVisib] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);  //Verification du code pour le coach.
    const [comments, setComments] = useState(false); // Si false ca veut dire : pas de possibilité d'ajouter un commentaire.
    const [s, setS] = useState();
    const [tempTask, setTempTask] = useState();
    const navigation = useNavigation();
    const [navigHomeScreen , setNavigHomeScreen] = useState(false);  // à modifier si j'ajoute un commentaire
    const [navigHomeScreen1 , setNavigHomeScreen1] = useState(false); // à modifier si je cloture une tache
    const [text, onChangeText] = useState("Useless Text");
    const [inputValue, setInputValue] = useState("");
    const [clotureTache, setClotureTache] = useState(false);
    
    let missBis=miss
    var list = tasks   // list contient toutes les taches pour une seule mission
    let pbis = p
    
 
    useEffect(() => {


    const taskAllocation = async () => {
      var t = ([])
      const o = await API.graphql(graphqlOperation( getObjectif, {id : miss.objectif})); 
      setObj(o)
   
      propss.forEach( function(object){ 
    

        if(object.type === 'task' && object.missionID === miss.id)
      {         
        t.push(object)
        
      } 

    }
      
      )
   
     
     setTasks(t)
    } 
    
    
    taskAllocation()
    
  }, []);

 
  //CETTE FONCTION CAPTURE LA TACHE SUR LAQUELLE J'AI CLIQUE et me propose de l'ajouter à ma liste de taches. 
  // Si cette tache est deja cloturée alors rien ne peut etre ajouté 
    const onPressObjectif = (task) => {
      
       setS(task)

      if(!task.status){
            setVisible(true);  //CLOTURER | COMMENTAIRE | ANNULER ?
            
      }else{
        setVisib(true)   // Tu as deja cloturé cette tache.
      }         
     
            }
            
            
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            const handleCommentaire = () => {

              if(s.comment){
                
                Alert.alert('Le commentaire précedent n a pas encore été lu par le joueur.')
                setVisible(false)
         
              }
        
              else{
         
                setVisible(false)
                

                setComments(true)   // Si true ça veut dire :  possible d'ajouter un commentaire.
          
                setTimeout(() => setModalOpen(true), Platform.OS === "ios" ? 1000 : 0)
                    
                
              }
            }; 



                    const afficheCommentaire = async (task) => {
                     
                     
            
                     
                      // console.log(task)


                      // let index =  list.indexOf(task)
                      let index1 = tasks.indexOf(task)
                      console.log('INDEX')
                      console.log(index1)
                      task.comment = false // Le commentaire a été lu donc task.comment passe à false
                      setComments(true) // Changement d'affichage au niveau du UI.   
                     
    
                      // Ecriture vers la base de données du comment qui passe à false
                    const updateCommentTask1 = await API.graphql(graphqlOperation( updateTask,  {input :{ id: task.id,  
                    comment: false,
                    // _version : task._version     
                                                                                      
                    }}));

                   

                    task._version += 1
                    setS(task)
            
                    tasks.splice(index1,s)
           
                       
                    Alert.alert( 
                      "", 
                      task.commentNote, 
                      [ { text: "OK Coach", onPress: () => {} } ] );

            }
            
    

            
    const handleCancel = () => {setVisible(false)};
    const handleSelect = () => {setVisib(false)}; 
        
  

          const handleClotureTache = () => {

            if(s.comment){
              Alert.alert('Impossible de clôturer cet objectif. Il y a un commentaire non lu.')
              setVisible(false)
            }
            else{

              setVisible(false)

              setTimeout(() => setModalOpen(true), Platform.OS === "ios" ? 1000 : 0)
              setNavigHomeScreen1(true)
              setClotureTache(true)  // L'option cloturer une tache est choisie. Servira de filtre dans la fonction ci-dessous.
                                    // La verification comme quoi il n'y a pas de commentaire en attente a été faite.
            }
         
            
          }; 
          
          
    const save = async (p, miss, s, obj) => {

        var version = parseInt(miss._version)
        var niveau = parseInt(miss._version)
    
      // const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});

    
  try{

      const updateplayer = await API.graphql(graphqlOperation( updatePlayer,  {input :{ id: p.id,  
            niveauActuel: p.niveauActuel,
            nombreDePointsActuel: p.nombreDePointsActuel,
            progressBar : p.progressBar,
            overflow : p.overflow,
            // _version : p._version                                                                           
      }}));
    }


  catch (e){console.log('echec update player')}


try{
      const updatetask = await API.graphql(graphqlOperation( updateTask,  {input :{ id: s.id,  
             status : s.status,
             missionID : miss.id,
            // _version : s._version                                                                           
      }}));
    }                                                                                                                                           
  
    catch (e){console.log('echec update task')}
      
try{
    
    const updatemission = await API.graphql(graphqlOperation( updateMission, { input :  {id: miss.id, 
            niveauActuel: miss.niveauActuel,
            progressBar : miss.progressBar,
            status : miss.status,
            // _version : version
            
  }}))

  // setMission(updatemission)
}                                                                                                                                           
 
catch (e){console.log('echec update mission')}


           };
         
    const terminate =  (task) =>  {
              
            task.status = false
       };  
       


  
// Create toggleModalVisibility function that will
// Open and close modal upon button clicks.
const toggleModalVisibility = async () => {


  // setModalOpen(false)
  let index1 = tasks.indexOf(s)
  var tempTask = s
  tempTask.comment = true
  tempTask.commentNote = inputValue
  // tempTask._version += 1
  // setS(tempTask)


  

  try{

    const updateCommentTask = await API.graphql(graphqlOperation( updateTask,  {input :{ id: s.id,  
          comment: true,
          commentNote: s.commentNote,
          // _version : s._version 
          
          
    }}));

    console.log('Commentaire ajouté')
  }


catch (e){console.log('echec')}
  
  // tempTask._version += 1 
  setS(tempTask)

  tasks.splice(index1,s)
  setNavigHomeScreen(true)
  setInputValue("")
  setModalVisible(false);


    
};
  




  return (

      


    <View style={styles.container}>

{/* ///////////////////////////////////////////////////////////// */}
                {/* MODAL POUR L AJOUT D UN COMMENTAIRE */}
{/* ///////////////////////////////////////////////////////////////// */}


<Modal visible={modalVisible} animationType='fade'  presentationStyle="overFullScreen"> 

                                                                                
                                                                                          
                                                      <View style={styles.viewWrapper}>
                                                                          <View style={styles.modalView}>
                                                                              <TextInput placeholder="Ton commentaire..." 
                                                                                        value={inputValue} style={styles.textInput} 
                                                                                        onChangeText={(value) => setInputValue(value)} />
                                                        
                                                                              {/** This button is responsible to close the modal */}
                                                                              <Button title="Close" onPress={toggleModalVisibility} />
                                                                          </View>
                                                                      </View>
                                                                                

                  </Modal>


<Modal visible={modalOpen} animationType='slide'>

                
                        <View style={styles.container1}>
                          
                        <Text style={styles.text}>Enter your access code</Text>  
                                    <KeycodeInput
                                          numeric={numeric}
                                          value={value}
                                          onChange={(newValue) => setValue(newValue)}
                                          onComplete={(completedValue) => {
                                          
  // Code d'accès du coach qui veut valider une tache 
                                            if(completedValue=='2020'){
                                              let a =  list.indexOf(s)
                                           

                                          //Soit tu viens pour une tache Soit tu viens pour un commentaire
                                          // comments == true signifie : Pas de commentaire en attente. 
                                          // clotureTache == False -> a choisi d'ajouter un commentaire dc clotureTache reste sur false
                                          // Conditions remplies donc possibilité d'ajouter un commentaire
                                                if(comments && !clotureTache) {
                                                  
                                                   setModalVisible(true) // ouvre la modal d'ajout d'un commentaire ici au dessus.
                                                  
                                                }    //IF 


                                                
                                       
                                                    //ce code s'execute si j'ai selectionné de VOULOIR CLOTURER UNE TACHE
                                                     
                                                else  {

                                         
                                              // Je change le statut de la tache que je suis en train de manipuler à "TRUE" pour la cloturer
                                              list[a].status=true
                                           
                                              
                                                    var c
                                                   
                                                     // list contient toutes les taches pour une seule mission
                                                     // si toutes les taches de LIST sont TRUE alors la MISSION est terminée aussi
                                                    let result = list.every( e  => e.status == true);

                                                  // check si toutes les taches de la mission sont accomplies maintenant que je viens encore de valider une tache. 
                                                  // Si oui : result = true et l'utilisateur reçoit un message de felicitations. 


                                                    // DANS CE PREMIER CAS TOUTES LES TACHES NE SONT PAS CLOTUREES
                                                    if (!result){
                                                 
                                                      let objBis = obj
                                                      

                                                      if( ((10 / tasks.length)%10 != 0) )
                                                      {
                                                            objBis.progressBar = (10 / tasks.length)/10
                                                            missBis.progressBar += parseFloat(objBis.progressBar)
                                                      }
                                                      else
                                                      {
                                                           objBis.progressBar = (10 / tasks.length)/10
                                                           missBis.progressBar += objBis.progressBar
                                                      }

                                                      var b = obj.data.getObjectif.niveauMax
                  
                                                      
                                                      // Update mission à 1000/2 donc à 500 ! 
                                                      c =  Math.trunc(b / tasks.length)
                                                      objBis.data.getObjectif.niveauActuel = c
                                                      missBis.niveauActuel += c
                                                 
                                                      
                                                      // retrouve l'index de l'objectif que je manipule dans la liste d'objectifs du joueur
                                                      //je change la valeur de l'objectif
                                                      let index = pbis.objectifs.items.indexOf(obj)
                                                      pbis.objectifs[index] = objBis
                                                      
                                                      //et finalement j'update l'objectif avec les nouvelles valeurs apres manipulation
                                                      setObj(objBis)
                                                      pbis.nombreDePointsActuel += c
                                                     
                                                      

                                                      pbis.niveauActuel = Math.floor(pbis.nombreDePointsActuel / 1000)
                                                      if (pbis.nombreDePointsActuel>=1000 && (pbis.nombreDePointsActuel % 1000)==0){

                                                        pbis.overflow = 0
                                                        pbis.progressBar = 0
                                                      }else if (pbis.nombreDePointsActuel>1000 && pbis.nombreDePointsActuel % 1000 !=0 ){
                                                        pbis.overflow = pbis.nombreDePointsActuel - (pbis.niveauActuel * 1000)
                                                        pbis.progressBar = pbis.overflow/1000
                                                        
                                                      }else if(pbis.nombreDePointsActuel<1000 && pbis.nombreDePointsActuel % 1000 !=0 ){
                                                        
                                                        if(pbis.overflow + missBis.niveauActuel)
                                                        pbis.overflow = pbis.nombreDePointsActuel
                                                        pbis.progressBar = pbis.overflow /1000 

                                                      }
                                                      let str = 'Objectif rempli. Good Job 👍. ';
                                                      Alert.alert(str)
                                                    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                     //DANS CE SECOND CAS ELLES SONT TOUTES CLOTUREES 
                                                    else{
                                                      
                                                      let objBis = obj
                                                   
                                                      if( ((10 / tasks.length)%10 != 0) )
                                                      {
                                                            objBis.progressBar = (10 / tasks.length)/10
                                                            missBis.progressBar += parseFloat(objBis.progressBar)
                                                      }
                                                      else
                                                      {
                                                           objBis.progressBar = (10 / tasks.length)/10
                                                           missBis.progressBar += objBis.progressBar
                                                      }


                                                      var b = obj.data.getObjectif.niveauMax
                                             
                                                      c =  Math.trunc(b / tasks.length)
                                                      objBis.data.getObjectif.niveauActuel = c   // c=1000
                                                      missBis.niveauActuel += c
                                                      // 2000
                                                      console.log(c)
                                                      console.log(missBis.niveauActuel)
                                                  


                                                      let index = pbis.objectifs.items.indexOf(obj)
                                                      objBis.accompli = true
                                                      missBis.status = true
                                                      pbis.objectifs[index] = objBis
                                                      setObj(objBis)
                                                      pbis.nombreDePointsActuel += c
                                                           //  1000                    1000
                                                      pbis.niveauActuel = Math.floor(pbis.nombreDePointsActuel / 1000)
                                                      if (pbis.nombreDePointsActuel>=1000 && (pbis.nombreDePointsActuel % 1000)==0){

                                                        pbis.overflow = 0
                                                        pbis.progressBar = 0
                                                      }else if (pbis.nombreDePointsActuel>1000 && pbis.nombreDePointsActuel % 1000 !=0 ){
                                                        pbis.overflow = pbis.nombreDePointsActuel - (pbis.niveauActuel * 1000)
                                                        pbis.progressBar = pbis.overflow/1000
                                                        
                                                      }else if(pbis.nombreDePointsActuel<1000 && pbis.nombreDePointsActuel % 1000 !=0 ){
                                                        
                                                        if(pbis.overflow + missBis.niveauActuel)
                                                        pbis.overflow = pbis.nombreDePointsActuel
                                                        pbis.progressBar = pbis.overflow /1000 

                                                      }
                                                     
                                                      let str = 'Bravo ';
                                                      str += p.name;
                                                      str += ',';
                                                      str += ' tu as rempli toutes les taches pour cet objectif.';
                                                      Alert.alert(str)

                                                    }
                                                    
                                                    setClotureTache(false) // remet le filtre cloture tache à false
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                              }  ////// FIN DU ELSE COMMENTS == FALSE
                                              
                                              
                                              setP(pbis)  //Set player State
                                              setS(list[a]) //Set task State
                                              


                                              //  if(missBis.niveauActuel > c){missBis._version += 1}//Check nécessaire à l'update des points de la mission.
                                                   
                                              setMission(missBis)   //Set mission State
                                     

                                              save(p, miss, s, obj)  // Fonction Save vers le backend
                                              setComments(false)
                                              setValue('') // Reset du mot de passe rentré par l'utilisateur
                                              setModalOpen(false) // Fermeture de la Modal
                                                   
                                                    
                                            }


                                            //ELSE AU CAS OU CODE RENTRE PAR LE COACH EST ERRONE
                                            else{
                                                    
                                                    setValue('')
                                                    setModalOpen(false)
                                                    Alert.alert('Code erronné.')
                                            } 
                                            //ELSE AU CAS OU CODE RENTRE PAR LE COACH EST ERRONE
                                                                  
                                           
                             
                                            setP(pbis)
                                            // if(navigHomeScreen1 || navigHomeScreen){
                                            // {navigation.navigate('TabThreeScreen')}
                                            // }

                                           
                                     }}/>

                                    <Pressable onPress={() => setModalOpen(false)}>     
                                    
                                        <Text style={styles.textbis}>Retour</Text>

                                    </Pressable>               
                      
                        </View>         
                               
</Modal>


            
    
                                     <View style={styles.haut}>

                                               
                                        <ImageBackground source={{uri:'https://contencloudfront.s3.amazonaws.com/montage.jpg'}} resizeMode="cover" style={styles.image}>
                                                        
                                             <Text adjustsFontSizeToFit style={styles.text1}>Remplis tes objectifs pour atteindre le niveau suivant.</Text>
                                            
                                       </ImageBackground>
                                                
                                     </View> 

                                 <View style={styles.bas}>
                                                <FlatList                                              
                                                            
                                                            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                                                            data={tasks}
                                                            renderItem={({item}) => (
                                                        

  /////////////////////////////////////////////    BOUTON INFO         /////////////////////////////////////////////                                               
                                                              <>
                                                              <View style={styles.info}>
                                                                  <Pressable onPress={() => {

                                                                            showMessage({
                                                                              message: item.description,
                                                                              type: "info",
                                                                              duration:4000,
                                                                              backgroundColor:'#D7BE69'
                                                                            });
                                                                            } }>

                                                                              <AntDesign name="infocirlce"  size={25} color={"white"} />

                                                                    </Pressable>
                                                              </View>
                                                              <>

 {/* /////////////////////////////////////////////    BOUTON OBJECTIF         ///////////////////////////////////////////// */}

                                                                <Pressable onPress={() => onPressObjectif(item)}>

                                                                  <Text style={styles.text}>{item.name}: {item.status ? "  👍" : <AntDesign name="closecircleo" size={20} color={"white"} />}  </Text>

                                                                </Pressable>

                                                              </>

{/* /////////////////////////////////////////////    BOUTON COMMENTS         ///////////////////////////////////////////// */}

                                                              <View style={styles.comments}>
                                                                            

                                                                    <TouchableOpacity onPress={() => afficheCommentaire(item)} disabled={!item.comment}>
                                                                         <Text style={{fontSize:15}}> {item.comment ?  "1 nouveau commentaire" : 'Pas de nouveau commentaire'}</Text>
                                                                    </TouchableOpacity>
                                                              </View>
                                                                


                                                                </>
                                                            )}/> 
                                      
                                </View> 

                                 <Dialog.Container visible={visible}>
                                                        <Dialog.Title>Menu Objectif</Dialog.Title>
                                                        <Dialog.Description>
                                                         Cloturer cette tâche pour {p.name} ou ajouter un commentaire ?
                                                        </Dialog.Description>
                                                        
                                                        <Dialog.Button label="Cloturer" onPress={handleClotureTache} />
                                                        <Dialog.Button label="Commentaire" onPress={handleCommentaire} />
                                                        <Dialog.Button label="Annuler" onPress={handleCancel} />
                                                        
                                                </Dialog.Container>    
                                
                                <Dialog.Container visible={visib}>
                                                        <Dialog.Title>Menu Objectif</Dialog.Title>
                                                        <Dialog.Description>
                                                          Tu as déja validé cet objectif.
                                                        </Dialog.Description>
                                                        <Dialog.Button label="OK" onPress={handleSelect} />
                                                        
                                                        
                                                </Dialog.Container> 
    </View>
  )  

}



const styles = StyleSheet.create({
  container: {flex: 1},

  image: {

    flex: 1,
    justifyContent:'center'
    
  },
  haut: {
    flex:1,
    marginBottom:20
    
  },
  text: {
    backgroundColor:'#D7BE69',
    marginBottom:10,
    borderRadius: 10,
    textAlign:'center',
  

  },

  textbis: {
    backgroundColor:'#D7BE69',
    marginTop:50,
    borderRadius: 10,
    textAlign:'center',
  

  },

  info: {
   
    marginBottom: 5,
  
  

  },

  comments: {
   
    alignItems:'center',

  },
  text1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    alignSelf:'center',

    
  },

  space1:{
    flex: 1 ,
  },

  bas:{
    flex: 1 ,  
    
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 200
  },
  container2: {
    height: '50%',
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  
  },

  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(Dimensions.get('window').width * 0.4) }, 
                { translateY: -90 }],
    height: 180,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
},
textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
},
  
viewWrapper: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
},
})


