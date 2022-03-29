import * as React from 'react';
import { View, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

import styles from './styles';
import { Playback } from 'expo-av/build/AV';
import { useRef, useState } from 'react';


export default function VideoPlayer({lien, commentaire, tag}) {
    
    // const { compil } = props;
    const video = useRef(null);
    const [status, setStatus] = useState({});



    return(

        <View style={{alignSelf: 'center',}}>
        <Text style={[styles.text1, { textAlign:'center',alignSelf:'center', backgroundColor:'green', fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>{tag}</Text>
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: lien,
            }}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)} />
            
            <Text style={[styles.text, {  alignSelf:'center', fontSize: 12, color: "#DFD8C8",  }]}>{commentaire}</Text>
            
            </View>


    )




}

