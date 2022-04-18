import React, {useEffect, useState} from 'react';
import { StyleSheet,Text, View, Button, ActivityIndicator } from 'react-native';
import Challenges from '../components/Challenges';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PictureScreen from '../screens/PictureScreen';
import VideoScreen from '../screens/VideoScreen';
import { API, graphqlOperation } from 'aws-amplify';
import { listMedia } from '../src/graphql/queries';



const Tab = createMaterialTopTabNavigator();

export default function  MyTabs({plr}) {

  const route = useRoute();
  const [player, setPlayer] = useState(plr);
  const [pictures, setPictures] = useState();
  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(true);
  var tempPicture:  any[] | null | undefined = []; 
  var tempVideo:  any[] | null | undefined = [];  
  var temp:  any[] | null | undefined = []; 


  useEffect(() => {

    const fetchMedia = async () => {

  
      //   const userData = await API.graphql(graphqlOperation(listMedia, {
      //      filter: {
      //          playerID: {eq: plr.id},
      //      }
      //  } ))

       
       const userData = await API.graphql(graphqlOperation(listMedia, {
        filter: { or: [
     
        
          { or: [ { playerID: { eq: plr.id } }, { playerID: { eq: "general" } } ] },
        ]

        }
    } ))

      // tri des vidéos et des photos à part.
      userData.data.listMedia.items.forEach(function(object) {
  
        if ( object.type === 'photo')
         {
            tempPicture.push(object)

               
         }

         else if (object.type === 'video')
         {
            tempVideo.push(object)
      
         }
});
       
    setPictures(tempPicture);

    setVideos(tempVideo)

    setLoading(false)
        // return userData;


    };

    
 setTimeout(() => {
    fetchMedia()

}, 200)
   

  }, []);


if(loading){

  return (

<View style={styles.container} >

    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
      <Text style={styles.loadingText}>Please Wait...</Text>
    </View>


</View> 
   ) 
  } 

else {
  return (

    
    <SafeAreaProvider >
                <Tab.Navigator>
                <Tab.Screen name="PICTURES" component={PictureScreen} initialParams={{plr: player, pic: pictures}} />
                <Tab.Screen name="VIDEOS" component={VideoScreen} initialParams={{plr: player, vid: videos}}/>
                </Tab.Navigator>
    </SafeAreaProvider>
  );

  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    paddingTop: 10,
    fontSize: 18,
    color: 'black'
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
