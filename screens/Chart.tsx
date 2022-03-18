

import {  ActivityIndicator, ImageBackground, StyleSheet, Image, Animated, Easing} from 'react-native';
import Constants from 'expo-constants';
import { Text, View } from '../components/Themed';
import ModalScreen from './ModalScreen'
import React, { useEffect, useRef, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPlayers } from '../src/graphql/queries';
import TypeWriter from 'react-native-typewriter';
import { useNavigation } from '@react-navigation/native';

const data = [{
  percentage: 800,
  color: 'tomato',
  max: 10000
}, {
  percentage: 1400,
  color: 'skyblue',
  max: 10000
}, {
  percentage: 9200,
  color: 'gold',
  max: 10000
}, {
  percentage: 2400,
  color: '#222',
  max: 10000
}]



export default function Chart() {
 
  const [allPlayers, setAllPlayers] =  useState();
  const [isLoading, setLoading] = useState(false)
  const [first, setFirst] = useState()
  const navigation = useNavigation();
  const [second, setSecond] = useState()
  const [third, setThird] = useState()
  const [fourth, setFourth] = useState()
  let best: any[] = ([])
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const [resultat, setResultat] = useState();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const allocation = () => {
        setFirst(best[0])  
        setSecond(best[1]) 
        setThird(best[2]) 
        setFourth(best[3]) 
  };

  useEffect(() => {



    const load = async () => 
    
   { 
    


          const players = await API.graphql(graphqlOperation(listPlayers)); 
          
  
          
           best = players.data.listPlayers.items
          
           best.sort(function(a, b) {
            return parseFloat(a.nombreDePointsActuel) - parseFloat(b.nombreDePointsActuel);
            // return a.name.localeCompare(b.name)
        }).reverse();
               
            
            setAllPlayers(best)
            allocation()
          
            
            setTimeout(() => { setLoading(true) }, 4000);

          };

    load()
  
  }, []);

  const appear = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();  

    
  };



  if(isLoading){appear()};



  const onLoad = () => { 

   
    return (
      <View style={styles.containerSpinner}>
  
                 
                          <Image 
                          style={styles.image}
                          source={{uri:'https://contencloudfront.s3.amazonaws.com/award.jpg'}}
                          />
  
                          {/* <Animated.Image
                                  style={{ height: 100, width: 100, alignSelf:'center', transform: [{rotate: spin}]}}
                                  source={{
                                    uri:
                                    'https://contencloudfront.s3.amazonaws.com/goal.png',
                                  }}
                         /> */}
  
                           {/* <ActivityIndicator style={styles.loading} size="large" color="#D7BE69" />  */}
  
                           <Text style={styles.legende}>Chargement</Text> 
                          
     
        <View>
          {/* <ActivityIndicator style={styles.loading} size="large" color="#D7BE69" /> */}
  
          {/* <Text style={styles.legende}>Chargement</Text> */}
        </View>
      </View>
  
  );

  };

  
  if(!isLoading){onLoad()};
  
  
 

  if (isLoading && fourth.nombreDePointsActuel !=0 && first.nombreDePointsActuel !=0 && second.nombreDePointsActuel !=0 && third.nombreDePointsActuel !=0){
 
  return (
    <View style={styles.container}>
  

  <View style={{ flex:1, flexDirection:'row', justifyContent:'space-evenly', alignItems: 'center', alignContent:'center' }}>

                <Animated.View style={[
          styles.loading1,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
                              <ImageBackground source={{uri:first.poster}} imageStyle={{ borderRadius: 40}} style={styles.image}>


                              </ImageBackground> 
                </Animated.View>
    
                <View style={{ flex:1, alignItems: 'center' }}>
                  
                  
                              <ModalScreen key={1} position = '1st' percentage={first.nombreDePointsActuel} name={first.name} color={'#D7BE69'} delay={500 + 100 * 1} max={5000}/>

                </View>

                

  </View>


 
 <View style={{ flex:1, flexDirection:'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center', alignContent:'center' }}>
                  
             

                  <ModalScreen key={2} position = '2nd' percentage={second.nombreDePointsActuel}  name={second.name} color={'#D7BE69'}  max={5000}/>

                  <ModalScreen key={3} position = '3rd' percentage={third.nombreDePointsActuel}  name={third.name} color={'#D7BE69'} max={5000}/>

                  <ModalScreen key={4} position = '4th' percentage={fourth.nombreDePointsActuel}  name={fourth.name} color={'#D7BE69'}  max={5000}/>

 </View> 

      {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
        {data.map((p, i) => {
          return <ModalScreen key={i} percentage={p.percentage}  color={p.color} delay={500 + 100 * i} max={p.max}/>
        })}
      </View> */}



    </View>
  );

  }//Is Loaded


else if (!isLoading){
    
    return (
    <View style={styles.containerSpinner}>

               
                        <Image 
                        style={styles.image}
                        source={{uri:'https://contencloudfront.s3.amazonaws.com/award.jpg'}}
                        />


                         <Text style={styles.legende}>Chargement</Text> 
   
      <View>
        {/* <ActivityIndicator style={styles.loading} size="large" color="#D7BE69" /> */}

        {/* <Text style={styles.legende}>Chargement</Text> */}
      </View>
    </View>

);

      }

   else {
     return (

     <View style={styles.containerSpinner}>


                 <Text style={styles.legende}>Aucun aperçu disponible pour le moment.</Text> 


     </View>
      );

  }

  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  image: {
  
    flex:1,
    resizeMode:"contain"
  },

  loading:{
      flex : 1,
      marginBottom:0
  },

  loading1:{  
    flex : 1,
    borderRadius:9
  },
  image1: {
    opacity:0.5,
    flex:1,
    resizeMode: 'cover',

  },
  containerSpinner: {
    flex: 1,
    justifyContent: "center",
  
  },
  legende: {
    textAlign:'center',
    fontStyle: 'italic',
    opacity: .5,
    color : '#D7BE69',
 },
});


