import * as React from 'react';
import { Text, View } from '../Themed';




import { useRef, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import ObjectifBis from '../ObjectifBis';


export default function ObjectifContainer({lien}) {
    
    // const { compil } = props;
    const video = useRef(null);
    const [status, setStatus] = useState({});
    // const [isAvailable , setBool] = useState(true);

if (playerPoints < 1500)

{
    return(

        <View style={{flex:1,}}> 
                                                
                                                
                                                
                 <Text style={styles.title1}>MENTAL</Text>  
                                                 
                                                        
                            <FlatList 
                                
                                style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}}
                               
                                data= {t1} 
                                 
                                renderItem={({item}) =>   (
                                                                <TouchableOpacity >
                                                                        <ObjectifBis objectif={item}/>
                                                                </TouchableOpacity>                                                       
                                         
                                                       
                            )}/>  

                                               
                                                                        
                </View> 


    )

}// IF

else 

{
    return(

        <View style={{flex:1}}> 
                                                
                                                
                                                
                 <Text style={styles.title1}>MENTAL</Text>  
                                                 
                                                        
                            <FlatList 
                                
                                style={{borderColor:"rgba(255,255,255,0.5)", borderWidth:0.5}}
                               
                                data= {t1} 
                                 
                                renderItem={({item}) =>   (
                                                                <TouchableOpacity onPress={() => showDialog(item)}>
                                                                        <ObjectifBis objectif={item}/>
                                                                </TouchableOpacity>                                                       
                                         
                                                       
                            )}/>  

                                               
                                                                        
                </View> 


    )

}// IF


}
