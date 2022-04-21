

import {  ActivityIndicator, ImageBackground, StyleSheet, Image, Animated, Easing} from 'react-native';
import Constants from 'expo-constants';
import { Text, View } from '../components/Themed';
import ModalScreen from './ModalScreen'
import React, { useEffect, useRef, useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { listCandidats, listPlayers, listVoters } from '../src/graphql/queries';

import { useNavigation } from '@react-navigation/native';
import RNPoll, { IChoice } from "react-native-poll";
import RNAnimated from "react-native-animated-component";
import { updateCandidats, updateVoters } from '../src/graphql/mutations';

const choices: Array<IChoice> = [
  { id: 1, choice: "Nike", votes: 0 },
  { id: 2, choice: "Adidas", votes: 0 },
  { id: 3, choice: "Puma", votes: 0 },
  { id: 4, choice: "Reebok", votes: 0 },
  { id: 5, choice: "Under Armour", votes: 0 },
];

let ch = [];

export default function VoteScreen() {

  
  const navigation = useNavigation();
  const [user, setUser] = useState();
  let userRef = useRef();
  let allCandidatsRef = useRef([]);
  let allVotersRef = useRef([]);
  const [user1, setUser1] = useState();
  const [peutVoter, setVote] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allCandidats, setCandidats] = useState([]);
  const [choicess, setChoicess] = useState([]);
  let [a, seta] = useState();
  let foreach = true

  const checkVoters = async () => {  

        allVotersRef.forEach((object) => {

          if ( object.name === userRef.username && (!object.status) )
           {
             setUser(object) 
             setVote(true)  
           }
           else{
             
           }

  });
 

    setLoading(true)
  }

  const allocation = async () => {

    allCandidatsRef.forEach((object) => {
        
        const choix: IChoice = {
          id: object.id,
          votes: object.nombreDeVotes,
          choice: object.name
      }
    
      setChoicess((oldArray) => [...oldArray, choix])
             
    }
    
    );
  
     
    
    };

  const updateVoterFunction = async (choix) => {  

        // Ecriture vers la base de données. Change le statut du voter à true.
     
        const updateVoter = await API.graphql(graphqlOperation( updateVoters,  {input :{ id: user.id,  
          status: true,                                                                 
          }}));

          const candidats = await API.graphql(graphqlOperation( updateCandidats,  {input :{ id: choix.id,  
            nombreDeVotes: choix.votes,                                                                 
            }}));
          
  }



  const recordVote = async (choix) => {  
   
    console.log("SelectedChoice: ", choix)
    
    // seta(choix.votes)

    
       updateVoterFunction(choix)
    
   }


  useEffect(() => {


    const loggedUser = async () => {  

      
      //Recupere les infos du candidat loggé
      const userInfo = await Auth.currentUserInfo();

                 userRef=userInfo

      //Recupere les candidats pour le poll
      const candidats = await API.graphql(graphqlOperation(listCandidats))

                 allCandidatsRef=candidats.data.listCandidats.items

      //Recupere la liste de ceux qui peuvent voter (status = false)
      const voters = await API.graphql(graphqlOperation(listVoters, {
        filter: {
            status: {eq: 'false'},
        }
    } ))

                allVotersRef=voters.data.listVoters.items
      
    }
      // setTimeout(() => {
      loggedUser()
      // allocation()
      
  
    // }, 200)


  }, []);


setTimeout(() => {
   checkVoters()
   allocation()
  }, 4000)








if(!loading){

  return (

<View style={styles.container} >

    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
      <Text style={styles.loadingText}>Please Wait...</Text>
    </View>


</View> 
   ) 
  } // en train de load

  else{

if(peutVoter)
{

  return (


    <View style={styles.container1}>
    
    <Text style={styles.title}>MEILLEUR JOUEUR DE LA SAISON</Text>
    
    
    <RNPoll
      animationDuration={750}
      totalVotes={100}
      choices={choicess}
      PollContainer={RNAnimated}
      PollItemContainer={RNAnimated}
      // onChoicePress={(selectedChoice: IChoice) => console.log("SelectedChoice: ", selectedChoice)} 
      onChoicePress={(selectedChoice: IChoice) => recordVote(selectedChoice)} 
      
      
      />
    
    <Text style={styles.loadingText1}>*Place ton vote pour voir les résultats.</Text>
    <Text style={styles.loadingText1}>*Ton vote est unique et non modifiable une fois validé.</Text>
      </View>

     );

} // PEUT VOTER

else{

  return (

    <View style={styles.container} >
    
        <View style={styles.loadingContainer}>
          {/* <ActivityIndicator size="large" /> */}
          <Text style={styles.legende}>TU NE PEUX PAS/PLUS VOTER AVEC CE COMPTE.</Text>
        </View>
    
    
    </View> 
       ) 

}// NE PEUT PAS VOTER
  

} // DONE WITH LOADING




}// fin de VoteScreen

  const styles = StyleSheet.create({

    containerSpinner: {
      flex: 1,
      justifyContent: "center",  
    },
    container: {
      flex: 1,
  
    },
    container1: {
      backgroundColor:'white',
      flex: 1,
      paddingRight:10,
      paddingLeft:10
    },
    legende: {
      textAlign:'center',
      fontStyle: 'italic',
      opacity: .5,
      color : '#D7BE69',
   },
   title:{
    color : '#D7BE69', 
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:50

  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    paddingTop: 10,
    fontSize: 18,
    color : '#D7BE69',
    textAlign:'center'
  },
  loadingText1: {
    paddingTop: 10,
    fontSize: 10,
    color : '#D7BE69',
  },
  });

    



  
  
 







  
  
