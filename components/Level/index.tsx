import * as React from 'react';
import { StyleSheet, Image, FlatList, View, ImageBackground} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text } from '../../components/Themed';
import categories from '../../assets/data/categories';
import * as Progress from 'react-native-progress';
import BouncingPreloader from 'react-native-bouncing-preloaders';



function pointConverter(params:number) {

  let a = params/1000
  a+=1
  a*=1000
  let diff = a - params

  let nombreAafficher = 1000 - diff
  return (console.log(nombreAafficher))
  
}
   
    export default function Level({plr, s}) {
      
      
    
        return (
       
        <View style={styles.container}>

                    <View style={styles.container1}>    
                
                                      <Image 
                                      style={styles.image}
                                      source={{uri:'https://contencloudfront.s3.amazonaws.com/goal.png'}}
                                      />

                  </View> 

                  <View style={styles.container2}>

                                    <Text style={styles.element}>NIVEAU {plr.niveauActuel}</Text>
                                    <Progress.Bar style={styles.element} color='#D7BE69' progress={plr.progressBar} height={15} width={200} />
                                    <Text style={styles.element}> {plr.overflow}  / 1000</Text>
                                    <Text style={styles.element}> Total :  {plr.nombreDePointsActuel} pts </Text>

                                

                </View>

        </View>
       
      );
    }



    const styles = StyleSheet.create({
            
        container: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            marginTop:10,
          
          },


          container1:{

           flex: 1,
           marginLeft: 10
          },


          container2:{
          flex:2,
            marginLeft: 20
            
            
          },


          element: {
          
           marginBottom: 10,
           fontSize: 16
        },

        image: {

          width: '100%',
          height:'100%',
          aspectRatio: 1 / 1,
          // resizeMode: 'cover',
          // borderRadius: 10,
        },
      });