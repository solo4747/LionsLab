import React, {useEffect, useState} from 'react';
import { DataStore, API,graphqlOperation, a } from 'aws-amplify';
import { StyleSheet, Image, FlatList, Alert, SafeAreaView} from 'react-native';
import HomeCategory from '../components/HomeCategory'


import { Text, View } from '../components/Themed';
import { Team } from '../src/models';
import { getTeam, listTeams } from '../src/graphql/queries';



export default function TabThreeScreen() {

  const [teams, setTeams] = useState([]);
  

   useEffect(() => {

     const fetchTeam = async () => {

      
        //  const teamsData = await API.graphql(graphqlOperation(listTeams))

        const teamsData = await API.graphql({ query: listTeams, authMode: "AMAZON_COGNITO_USER_POOLS" })
        
         teamsData.data.listTeams.items.sort((a, b) => { return a.id - b.id; })
        
         setTeams(teamsData.data.listTeams.items);

      
        //  if userData == undefined, j'initialise un champs error qui va etre à true et faire imprimer une page d'erreur

        
        


         return teamsData;
        
     };

     
  setTimeout(() => {
     fetchTeam()
}, 200)
    

   }, []);

    
     

      

      //  return userData;
 
   

  return (

    <SafeAreaView  style={styles.container}>

      
      
        <FlatList                                              
          data= {teams}
          renderItem={({item}) => <HomeCategory team={item} />}
      />



        {/* Flatlist de HomeCategory    
            Mon component HomeCategory contient un interface HomeCategoryInterface
            Cet interface définit un objet "category" qui match avec la structure de mes données dans categories.  
            Il reçoit en parametre les données qui viennent de categories et les affiche dans une flatlist. 
        */}



    </SafeAreaView>
  );






  // return (

  //   <SafeAreaView  style={styles.container1}>

  //     <Text style={styles.title}>This screen doesn't exist.</Text>
  //     {/* <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
  //       <Text style={styles.linkText}>Go to home screen!</Text>
  //     </TouchableOpacity> */}
   

  //   </SafeAreaView>
  // );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding :20
  },

  container1: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

  image: {
    height: 170,
    width: 100,
    borderRadius: 5,
    resizeMode: 'cover',
    margin:5
  },
  title:{

    fontSize:20,
    fontWeight:'bold',

  }

});
function sortListById() {
  throw new Error('Function not implemented.');
}

