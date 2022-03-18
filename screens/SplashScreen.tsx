import React, {useEffect, useState} from 'react';
import Amplify, { DataStore, API,graphqlOperation, a, Auth } from 'aws-amplify';
import { StyleSheet, Image, FlatList, Alert, SafeAreaView, ImageBackground, Pressable, TouchableOpacity, TouchableHighlight} from 'react-native';
import HomeCategory from '../components/HomeCategory'
import { useNavigation } from '@react-navigation/native';


import { Text, View } from '../components/Themed';
import { Team } from '../src/models';
import { getTeam, listTeams } from '../src/graphql/queries';
import Navigation from '../navigation';
import navigation from '../navigation';



export default function SplashScreen() {

    const navigation = useNavigation();

   useEffect(() => {

     const splash = () => {

        {navigation.navigate('TabThreeScreen')}
        
     };

     
  setTimeout(() => {
     splash()
}, 3000)
    

   }, []);



    
     

  const splash1 = async () => {

    // {navigation.navigate('TabThreeScreen')}

     
      const userInfo = await Auth.currentUserInfo();

       Alert.alert(userInfo.username)
  
      
    }
    
 

      
 
   

  return (

    <SafeAreaView  style={styles.container}>


<ImageBackground source={{uri:'https://contencloudfront.s3.amazonaws.com/espacejoueur.jpeg'}} resizeMode="cover" style={styles.image}>
<TouchableHighlight
          onPress={splash1}
    
          style={styles.touchable}>

          <View style={styles.button}> 
            {/* <Text style={styles.welcome}>
              {this.state.pressing ? 'EEK!' : 'PUSH ME'}
            </Text> */}
          </View> 

        </TouchableHighlight>
</ImageBackground>
       


    </SafeAreaView>
  );









}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'

  },

  image: {
    flex: 1,

  
  },
  touchable: {
    borderRadius: 100,
    justifyContent:'center'
 
  },

  button: {
    backgroundColor:'transparent',
    borderRadius: 100,
    height: 200,
    width: 200,
    alignSelf:'center'
  },

});

