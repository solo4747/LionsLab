import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Animated, StyleSheet, Easing, TextInput, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Text, View } from '../components/Themed';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import TypeWriter from 'react-native-typewriter';       

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function ModalScreen({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  delay = 0,
  name="",
  max = 100,
  position =""
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };

  React.useEffect(() => {
    animation(percentage);
    animated.addListener((v) => {
      const maxPerc = 100 * v.value / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    }, [max, percentage]);

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View >
     
     <View style={{ width: radius * 2, height: radius * 2 }}>
    
                  <TextInput
                        defaultValue={position}
                        editable={false}
                        style={[
                          StyleSheet.absoluteFillObject,
                          {fontSize: radius/2},
                          {fontWeight:'900', textAlign:'center', color:'white', fontStyle:'italic', fontFamily:'Roboto'}
                        ]}
                      
                      />
      </View>



    <View style={{ width: radius * 2, height: radius * 2 }}>

      
 

      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        >
        <G
          rotation="-90"
          origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference} />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1" />
        </G>

        </Svg>

    
        <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: color },
          styles.text,
        ]} />
     
                     
    </View>

    
    <View style={{ width: radius * 2, height: radius * 2 }}>
    
            <TextInput
                  defaultValue={name}
                  editable={false}
                  style={[
                    StyleSheet.absoluteFillObject,
                    {fontSize: radius/2},
                    {fontWeight:'900', textAlign:'center', color:'white', fontStyle:'italic', fontFamily:'Roboto'}
                  ]}
                
                />


              
    
    </View>
 


</View>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  text: { fontWeight: '900', textAlign: 'center' },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
