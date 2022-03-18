import { AntDesign, MaterialIcons, Entypo  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { API, graphqlOperation } from 'aws-amplify';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Chart from '../screens/Chart';
import MediaScreen from '../screens/MediaScreen';
import ModalScreen from '../screens/ModalScreen';
import SplashScreen from '../screens/SplashScreen';
import TabFiveScreen from '../screens/TabFiveScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';

import TabTwoScreen from '../screens/TabTwoScreen';
import { listTeams } from '../src/graphql/queries';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}>


                {/* DANS MON BOTTOMTABNAVIGATOR J AI LES DIFFERENTS TAB QUE CONTIENT MON APPLICATION 
                        
                        1. HOME (TabOneNavigator)
                        2. ESPACE (TabTwoNavigator)
                        3. ...
                        4. ...
                        5. ...
                
                */}



      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />


      <BottomTab.Screen
        name="Ranking"
        component={TabTwoNavigator}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="trophy" size={24} color={color} />
     
          
          ,
        }}
      />

    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab


const HomeStack = createStackNavigator<HomeParamList>();


// ici j'ai tous les différents écrans qui se retrouvent dans mon premier tab

function TabOneNavigator() {

  


  return (
    <HomeStack.Navigator>

      <HomeStack.Screen
        name="SplashScreen"                           
        component={SplashScreen}
        
        options={{   headerShown: false, title: 'ACCEUIL', headerTitleAlign:'center' }}
        
      />

      <HomeStack.Screen
        name="TabThreeScreen"                           
        component={TabThreeScreen}
        options={{ headerShown: true, title: 'ACCEUIL',headerTitleAlign:'center', headerLeft: (props) => null }}
      />
      <HomeStack.Screen
        name="MediaScreen"
        component={MediaScreen}
        options={{ headerShown: true,headerTitleAlign:'center', title: 'MEDIA', }}
      />

      <HomeStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ headerShown: true, title: 'PROFILE JOUEUR',headerTitleAlign:'center', }}
      />

      <HomeStack.Screen
        name="TabFiveScreen"
        component={TabFiveScreen}
        options={{ headerShown: true, title: 'OBJECTIFS', headerTitleAlign:'center' }}
      />

     </HomeStack.Navigator>
      
      
    
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

// ici j'ai tous les différents écrans qui se retrouvent dans mon deuxieme tab

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={Chart}
        options={{ headerShown: true, title: 'CLASSEMENT', headerTitleAlign:'center' }}
   
        
      />
    </TabTwoStack.Navigator>
  );
}