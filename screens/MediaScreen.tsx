import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify, {Auth, graphqlOperation} from 'aws-amplify';


import useCachedResources from '../hooks/useCachedResources';
import useColorScheme from '../hooks/useColorScheme';
import Navigation from '../navigation';
import config from '../src/aws-exports';
import { API } from 'aws-amplify';
import { getTeam } from '../src/graphql/queries';
import { createTeam } from '../src/graphql/mutations';
import FlashMessage from "react-native-flash-message";
import MyTabs from '../navigation/TopBarNavigator';
import { useRoute } from '@react-navigation/native';



export default function MediaScreen({plr}) {
        
  const isLoadingComplete = useCachedResources(); 
  const colorScheme = useColorScheme();
  const route = useRoute();
  const [player, setPlayer] = useState(route.params);


    return (

            <SafeAreaProvider>
                    <MyTabs plr={player}/>
            </SafeAreaProvider>

    );
  
}




