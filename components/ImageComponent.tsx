import * as React from 'react';
import { StyleSheet, Image, FlatList, View, ImageBackground, TouchableOpacity} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';
import categories from '../assets/data/categories';
import * as Progress from 'react-native-progress';
import BouncingPreloader from 'react-native-bouncing-preloaders';
import { Zoom } from 'react-native-reanimated-zoom';



function pointConverter(params:number) {

  let a = params/1000
  a+=1
  a*=1000
  let diff = a - params

  let nombreAafficher = 1000 - diff
  return (console.log(nombreAafficher))
  
}
   
    export default function ImageComponent({imageURI, description}) {
      
     
      
    
        return (
       
            <View style={styles.imageHolder}>
 
              <Zoom>
            {/* <TouchableOpacity onPress={() => onPicturePress}> */}
                    <Image source={{uri: imageURI}} style={styles.image} />

            {/* </TouchableOpacity> */}
            </Zoom>
          </View>
       
      );
    }



    const styles = StyleSheet.create({
            
        imageHolder: {
            margin: 5,
            height: 160,
            flex: 1,
            position: 'relative'
          },
          image: {
            height: '100%',
            width: '100%',
            resizeMode: 'contain'
          },
          textViewHolder: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            paddingHorizontal: 10,
            paddingVertical: 13,
            alignItems: 'center'
          },
          textOnImage: {
            color: 'white'
          },


         
      });