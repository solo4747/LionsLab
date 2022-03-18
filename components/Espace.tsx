import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import navigation from '../navigation';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';



export default function Espace() {

  const navigation = useNavigation();
  return (
    
      <View style={styles.container}>
                
       {/* Photo AWS avec Url de l'objet */}

                <View style={styles.space1}>
                        <Image 
                        style={styles.image}
                        source={{uri:'https://contencloudfront.s3.amazonaws.com/espacejoueur.jpeg'}}
                        />
                </View>


                <View style={styles.space2}>
                        <Image 
                        style={styles.image}
                        source={{uri:'https://contencloudfront.s3.amazonaws.com/foot5.jpg'}}
                        />

                </View>
      </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1 
  },

  image: {

    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  
  space1:{
    flex: 1 ,
    justifyContent: 'center'

  },
  space2:{
    flex: 1 ,
    justifyContent: 'center'
  }
});





