import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify, {Auth, graphqlOperation} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import config from './src/aws-exports';
import { API } from 'aws-amplify';
import { getTeam } from './src/graphql/queries';
import { createTeam } from './src/graphql/mutations';
import FlashMessage from "react-native-flash-message";
import SplashScreen from 'react-native-splash-screen'

Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources(); 
  const colorScheme = useColorScheme();

  useEffect(() => {

    const fetchUser = async () => {

      const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
      
  
        // const userData = await API.graphql(graphqlOperation(getTeam,{id : userInfo.attributes.sub}))
     
     
              
                return;
              
     
    



      // if (userInfo){
      //   const userData = await API.graphql(graphqlOperation(getTeam,{id : userInfo.attributes.sub}))
     
     
      //         if (userData.data.getTeam){
      //           console.log("User is already in de database");
      //           return;
      //         }
     
      // }

     


      
    };

    fetchUser();
   
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>

        {/* Navigation component , contient les différents tabs que contient mon app. */}
        <Navigation colorScheme={colorScheme} />

  
        <FlashMessage position="bottom" />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);



