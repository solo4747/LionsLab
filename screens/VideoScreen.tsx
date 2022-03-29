import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Image,
  FlatList,
} from 'react-native';
import {Audio, Video} from 'expo-av';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View , Text} from '../components/Themed';
import VideoPlayer from "../components/VideoPlayer";

const width = Dimensions.get('window').width;



const resizeMode = 'contain';



export default function VideoScreen({ route }) {

    const [vids, setVids] = useState(route.params.vid);
    const [currentPlayer, setcurrentPlayer] = useState(route.params.plr);
    const [uri, setUri] = useState();
    const [index, setIndex] = React.useState(0);
    const opacity = React.useRef(new Animated.Value(1)).current;
    const onMomentumScrollEnd = ({nativeEvent}) => {
      const newIndex = nativeEvent.contentOffset.x / width;
      if (newIndex !== index && newIndex < vids.length && newIndex >= 0) {
        opacity.setValue(0);
        setIndex(newIndex);
      }
    };
  

    if (vids.length == 0){
       
      return (

 

        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>No Videos</Text>
        </View>


 
      ) 
} 


else{
    return (

        
  
        
        <View style={{alignSelf:'center'}}>
                                <FlatList
                                        data={vids}
                                        
                                        keyExtractor={item => item.id}
                                        renderItem={({ item }) => <VideoPlayer lien={item.uri} commentaire={item.description} tag={item.tag}  />}
                                        horizontal
                                      />

                                      
         
        </View>
        
        
        
       
    );

    }// else 
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    item: {
      height: '100%',
      width,
      overflow: 'hidden',
    },
    video: {flex: 1},

    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingText: {
      paddingTop: 10,
      fontSize: 18,
    },


  mediaCount: {
      backgroundColor: "#41444B",
      // position: "absolute",
      // top: "50%",
      // marginTop: -50,
      // marginLeft: 30,
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.38)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
      shadowOpacity: 1
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#D7BE69"
},
  });
  