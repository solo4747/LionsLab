import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, FlatList, Pressable, Alert, View, Modal, TouchableOpacity} from 'react-native';
import { API, Auth, DataStore, graphqlOperation, navItem } from 'aws-amplify';
import { Text } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import TabFourScreen from '../../screens/TabFourScreen';
import {Objectif, Player, Team} from '../../src/models';
import { KeycodeInput } from 'react-native-keycode'
import { showMessage } from "react-native-flash-message";


interface HomeTeamInterface{  
    // Je definis un objet de type categorie et maintenant le type "category est utilisable dans mon code"
    team: Team,    
}

   // En typescript quand j'utilise une props je dois définir son type. Javascript non"
    // Mon component prendra ici en paramètre une une props de type categoryObject. L'interface CategoryObject renferme une category.
    export default function HomeCategory( {team}) {

        // const { team } = props;
        // const [players, setPlayers] = useState([]);
        let players = team.players.items;
        const [value, setValue] = useState('');
        const [numeric, setNumeric] = useState(false);
        const [modalOpen, setModalOpen] = useState(false);
        const navigation = useNavigation();
        const [user, setUser] = useState();
        const [undefine, setUndefine] = useState(false);

        useEffect(() => {

          const loggedUser = async () => {  
            const userInfo = await Auth.currentUserInfo();

          
              setUser(userInfo)
          
            
            
          }


          setTimeout(() => {
          loggedUser()
        }, 200)

        
        }, []);
    
        
      
        const onPicturePress = (player: Player) => {
          let str = 'Tu ne peux pas accéder au profile de ';
          str += player.name;
          str += '.';
    

          

          if(user.username === 'firstuser' 
             || user.username === 'stef' 
             || user.username === 'seconduser'
             || user.username === 'bapt' 
             || user.username === 'owo' 
             || user.username === player.login)
          
          {
           
                 {navigation.navigate('TabFourScreen', player)}
              
          }

          else{
                  showMessage({
                    message: str,
                    type: "info",
                    duration:2000,
                    backgroundColor:'#D7BE69'
                  });
          }
        
     
        }

        return (
        <>
            {/* Title + flatlist qui affiche le poster des joueurs. */}
    
          <Text style={styles.title}>{team.name}</Text>
          
        
          <FlatList                                              
              data={players}
              renderItem={({item}) => ( 
    
     
            
          
              <Pressable onPress={() => onPicturePress(item)}> 
              
              <Image style={styles.image} source={{uri: item?.poster}} />
                            <View style={styles.textViewHolder}>
                                    <Text numberOfLines={1} style={styles.textOnImage}>
                                      {item.name}
                                    </Text>
                            </View>
              </Pressable> 
         
              
              )}
              horizontal
          /> 
    
       
    
    
    
        </>
      );
    }


    const styles = StyleSheet.create({
        
        container: {
            flex: 1,
            padding :20
          },
          image: {
            height: 170,
            width: 100,
            borderRadius: 5,
            resizeMode: 'cover',
            margin:5
          },
          textViewHolder: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            paddingHorizontal: 10,
            paddingVertical: 13,
            alignItems: 'center'
          },
          textOnImage: {
            color: 'white'
          },



          title:{
        
            fontSize:20,
            fontWeight:'bold',
        
          },
          text: {
            fontSize: 18,
            marginBottom: 32
          },

          container1: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            paddingBottom: 200
          },
      });