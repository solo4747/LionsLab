import { API, graphqlOperation } from 'aws-amplify';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, ImageBackground, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { filterConfig } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import Challenges from '../components/Challenges';

import EditScreenInfo from '../components/EditScreenInfo';
import Espace from '../components/Espace';
import HomeCategory from '../components/HomeCategory';
import ImageComponent from '../components/ImageComponent';
import AddObjectif from '../components/ObjectifList/AddObjectif';
import { Text, View } from '../components/Themed';
import { listMedia } from '../src/graphql/queries';


export default function PictureScreen({ route }) {

    const [pics, setPics] = useState(route.params.pic);
    const [uri, setUri] = useState();
    const [currentPlayer, setcurrentPlayer] = useState(route.params.plr);



    

   if (pics.length == 0){
       
                return (

           

                  <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>No Pictures</Text>
                  </View>


         
                ) 
  }  
     else{
        return(
                <View style={{ flex: 1 }}>


                                       <FlatList keyExtractor={(item) => item.id}
                                        key={1}
                                        numColumns={3}
                                        data={pics}
                                        renderItem={({ item }) =>

                                                
                                          <ImageComponent imageURI={item.uri} description={item.description.toUpperCase()} />

                                        } /> 

                </View>
  ); // returne
} //else


}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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


function ModelMediaFilerInput(listMedia: string, filter: any, ModelMediaFilerInput: any): import("@aws-amplify/api-graphql").GraphQLOptions {
    throw new Error('Function not implemented.');
}

