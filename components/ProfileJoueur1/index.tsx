import * as React from 'react';
import { StyleSheet, Image, FlatList,  ImageBackground, Pressable, SafeAreaView, ScrollView} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import { Player } from '../../src/models';
import navigation from '../../navigation';
import { useNavigation, useRoute } from '@react-navigation/native';




   // En typescript quand j'utilise une props je dois définir son type. Javascript non"
    // Mon component prendra ici en paramètre une une props de type categoryObject. L'interface CategoryObject renferme une category.
    // export default function ProfileJoueur1(props: PlayerInterface) {

    export default function ProfileJoueur1({plr}) {
      // const { player } = props;
      const navigation = useNavigation();

      const NavToMedia = () => {

        {navigation.navigate('MediaScreen', plr)}
    
      }  
    
        return (

          <SafeAreaView style={styles.container}>
          
          

                    <View style={{flex:2, marginTop:10}}>
                                        
                        
                            <Image source={{uri: plr.poster }} style={styles.image} resizeMode="contain"></Image>
         
                           
                          
                    </View > 

                    <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                            <Text style={[styles.text, { fontWeight: "200", fontSize: 25 }]}>{plr.name}</Text>
                            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>POSITION</Text>
                        
                    </View>

                    <View style={{flex:1, flexDirection: "row", justifyContent:'center',alignItems:'center' }}>
                            <View style={styles.statsBox}>
                                <Text numberOfLines={1} style={[styles.text, { fontSize: 16 }]}>{plr.pied}</Text>
                                <Text style={[styles.text, styles.subText]}>PIED FORT</Text>
                            </View>

                            <View style={styles.statsBox}>
                                <Text style={[styles.text, { fontSize: 16 }]}>{plr.age}</Text>
                                <Text style={[styles.text, styles.subText]}>Annee</Text>
                            </View>

                            <View style={styles.statsBox}>

                              <Pressable onPress={() => NavToMedia()}>

                                  <Ionicons name="videocam-outline" size={16} color="#D7BE69" ></Ionicons>
                                  <Text style={[styles.text, styles.subText]}>Media</Text>
                                  

                              </Pressable>

                                
                            </View>

                    
                        
                    </View>


            
                    <View style={styles.separator1} lightColor="#eee" darkColor="rgba(255,255,255,0.5)" />
                   
                
            
        </SafeAreaView>

       
        
       
      );
    }


    const styles = StyleSheet.create({

      container: {
        flex: 1,  
        borderBottomColor:"#D7BE69",
        borderRadius:50,
        
        
       
      
    },

    separator1: {
                
        marginVertical: 5,
        height: 1,
        width: '80%',
        alignSelf:'center'
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#D7BE69",
        
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        
       
        overflow: 'hidden',

        
        
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        flex:1,
        borderRadius: 100,
        
     
        
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "black",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
    
        flex:1 ,
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
     
        flex:1 ,
    },
    statsBox: {
        alignItems: "center",
        flex: 1,
        
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
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
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
        
        // container: {
        //     flex: 1,
         
        //   },
        //   image: {
        //     flex: 1,
      
          
        //   },
        //   container1: {
        //     flex: 1,
        //     flexDirection:'row',
        //     justifyContent:'space-evenly',
        //     alignItems:'flex-end',
        //     backgroundColor:'transparent'
        //   },

        //   container2: {
        //     flex: 1,
        //     justifyContent:'center',
        //     alignItems:'center',
        //     backgroundColor:'transparent'
        //   },
        //   element: {
        //    fontSize:20
         
        //   },
      });