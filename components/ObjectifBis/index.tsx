import * as React from 'react';
import { StyleSheet, Image, FlatList, Platform} from 'react-native';
import { Text, View } from '../../components/Themed';
import * as Progress from 'react-native-progress';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Objectif } from '../../src/models';

interface ObjectifInterface{  
  
  objectif: Objectif,
}



   
    export default function ObjectifBis({objectif, show}) {
        
      // const { objectif } = props;
        
        return (
       
        <View style={styles.container}>

            
                            <View style={styles.challengeContainer}>



                                            <View style={styles.container1}>
                                                    <Text style={styles.element0}>{show ? objectif.name : '---'}</Text>
                                            </View>


                                            <View style={styles.container2}>
                                                    <AirbnbRating
                                                    count={objectif.difficulte}
                                                    showRating={false}
                                                    size={10}
                                                    isDisabled={true}/>
                                            </View>

                             </View>
                      


                        


        </View>
   


       
      );
    }



    const styles = StyleSheet.create({
            
        container: {
            flex: 1,
            
            
          },
          container1: {
            flex:2,      
            marginLeft:10,
            backgroundColor:'transparent'
          },
          container2: {
            flex:1,   
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'transparent'
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
        challengeContainer:{
            flexDirection:'row',
         }
      });