import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import Challenges from '../components/Challenges';
import {useRoute} from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import Espace from '../components/Espace';
import Level from '../components/Level';
import ProfileJoueur1 from '../components/ProfileJoueur1';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';
import { Objectif, Player } from '../src/models';
import { listMissions, listTeams } from '../src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { filterConfig } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';


export default function TabFourScreen() {
  const route = useRoute();

  const [player, setPlayer] = useState(route.params);
  
  return (
    <View style={styles.container}>

            <View style={styles.container2}>
          
                    <ProfileJoueur1 plr={player}/>
                        
            </View>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <View style={styles.container1}>
                    <Level plr={player} s={setPlayer} />
            </View>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}


            <View style={styles.container2}>
                    <Challenges  plr={player}  s={setPlayer}/>
          </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container1: {
    flex: 1,
    marginTop:10,
    marginBottom:20,
  },

  container2: {
    flex: 2,
    
  },
});