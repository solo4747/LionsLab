import { API, graphqlOperation } from 'aws-amplify';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, ImageBackground, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import FootballField from 'react-native-football-lineup';
import { SafeAreaProvider } from 'react-native-safe-area-context';



  
var home = {
    name: 'LIONS',
    module: '2-3-2',
    team: [
      [
        {
          number: 1,
          name: 'Daniel',
        },
      ],
      [
        {
          number: 21,
          name: 'Teo',
        },
        // {
        //   number: 3,
        //   name: 'Pepe',
        // },
        {
          number: 6,
          name: 'Naël',
        },
      ],
      [
        {
          number: 14,
          name: 'Alex',
        },
        // {
        //   number: 8,
        //   name: 'Mountinho',
        // },
        {
          number: 11,
          name: 'Matheo',
        },
        {
          number: 17,
          name: 'Noah',
        },
      ],
      [
        {
            number: 5,
            name: 'Timeo',
        },
        // {
        //   number: 16,
        //   name: 'Fernandes',
        // },
        {
          number: 7,
          name: 'Veikka',
        },
      ],
    ],
    home_team_events: [
    //   {
    //     id: 203,
    //     type_of_event: 'red-card',
    //     player: 'Silva',
    //     time: "3'",
    //   },
    //   {
    //     id: 210,
    //     type_of_event: 'yellow-card',
    //     player: 'Fernandes',
    //     time: "64'",
    //   },
    //   {
    //     id: 210,
    //     type_of_event: 'yellow-card',
    //     player: 'Fonte',
    //     time: "64'",
    //   },
    //   {
    //     id: 206,
    //     type_of_event: 'substitution-in',
    //     player: 'Fonte',
    //     time: "31'",
    //   },
    ],
  };
  
  var away = {
    name: 'Rixensart',
    module: 'RDV Samedi 10h30',
    team: [
    //   [
    //     {
    //       number: 1,
    //       name: 'De Gea',
    //     },
    //   ],
    //   [
    //     {
    //       number: 18,
    //       name: 'Alba',
    //     },
    //     {
    //       number: 15,
    //       name: 'Ramos',
    //     },
    //     {
    //       number: 3,
    //       name: 'Pique',
    //     },
    //     {
    //       number: 4,
    //       name: 'Nacho',
    //     },
    //   ],
    //   [
    //     {
    //       number: 8,
    //       name: 'Koke',
    //     },
    //     {
    //       number: 5,
    //       name: 'Busquets',
    //     },
    //   ],
    //   [
    //     {
    //       number: 6,
    //       name: 'Iniesta',
    //     },
    //     {
    //       number: 22,
    //       name: 'Isco',
    //     },
    //     {
    //       number: 21,
    //       name: 'Silva',
    //     },
    //   ],
      [
        {
          number: 19,
          name: 'Costa',
        },
        {
            number: 6,
            name: 'Iniesta',
          },
          {
            number: 22,
            name: 'Isco',
          },
          {
            number: 21,
            name: 'Silva',
          },
      ],
    ],
    away_team_events: [
    //   {
    //     id: 210,
    //     type_of_event: 'yellow-card',
    //     player: 'De Gea',
    //     time: "12'",
    //   },
    //   {
    //     id: 206,
    //     type_of_event: 'substitution-in',
    //     player: 'Iniesta',
    //     time: "31'",
    //   },
    //   {
    //     id: 206,
    //     type_of_event: 'substitution-in',
    //     player: 'Costa',
    //     time: "32'",
    //   },
    //   {
    //     id: 206,
    //     type_of_event: 'red-card',
    //     player: 'Silva',
    //     time: "31'",
    //   },
    ],
  };


export default function LineupScreen() {

    // let players = team.players.items;

    return (

        <SafeAreaProvider>
        <View style={styles.container}>
      
        <FootballField home={home} away={away} />
    
        </View>

        </SafeAreaProvider>
      );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        borderColor: '#fff',
        backgroundColor: '#000',
      },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    paddingTop: 10,
    fontSize: 18,
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});


