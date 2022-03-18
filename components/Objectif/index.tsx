import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from '../Themed';
import * as Progress from 'react-native-progress';
import {  AirbnbRating } from 'react-native-ratings';
import {  useState } from 'react';
import { Mission, Objectif } from '../../src/models';

interface ObjectifInterface{  
  
  objectif: Objectif,

}

interface MissionInterface{  
  
  mission: Mission,

}

                                              ////////////////
   
    export default function Objectifs(mission) {
      
      
      // const [objectif, setObjectif] = useState(props);     ////////////////////////////

      // const [mission, setMission] = useState(props);
  
      const [bool, setBool] = useState(true);

      const updateProgressBar = () => {
       
 
        // return objectif;
      };

      updateProgressBar();
            
       
      if(!mission.mission.status){
        return (
       
        <View style={styles.container}>

            

                        <View style={styles.challengeContainer}>



                                        <View style={styles.container1}>
                                                <Text style={styles.element0}>{mission.mission.name}</Text>
                                                <Progress.Bar style={styles.element1} color='#D7BE69' progress={mission.mission.progressBar} width={150} />
                                                <Text style={styles.element2}>{mission.mission.niveauActuel} / {mission.mission.niveauMax}</Text> 
                                        </View>

                                        <View style={styles.container2}>

                                                <AirbnbRating
                                                    count={mission.mission.difficulte}
                                                    showRating={false}
                                                    size={15}
                                                    isDisabled={true}
                                                    
                                                    />

                                        </View>

                        </View>


                                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(215,190,105,0.5)" />
                        


        </View>
   


       
      );
        }

    else{


      return (
       
        <View style={styles.container}>

            

                        <View style={styles.challengeContainer1}>



                                        <View style={styles.container1}>
                                                <Text style={styles.element0}>{mission.mission.name}</Text>
                                                <Progress.Bar style={styles.element1} color='#D7BE69' progress={mission.mission.progressBar} width={150} />
                                                <Text style={styles.element2}>{mission.mission.niveauActuel} / {mission.mission.niveauMax}</Text> 

                                        </View>

                                        <View style={styles.container2}>

                                                <AirbnbRating
                                                    count={mission.mission.difficulte}
                                                    showRating={false}
                                                    size={15}
                                                    isDisabled={true}
                                                    
                                                    />

                                        </View>

                        </View>


                                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(215,190,105,0.5)" />
                        


        </View>
   


       
      );




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


       
        challengeContainer:{
         
            flexDirection:'row',

 
         },

         challengeContainer1:{
         
          flexDirection:'row',
          opacity:0.3
          // justifyContent:'center',
          // alignItems:'center'

       }
      });