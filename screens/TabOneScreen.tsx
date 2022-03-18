import * as React from 'react';
import { StyleSheet } from 'react-native';
import Challenges from '../components/Challenges';

import EditScreenInfo from '../components/EditScreenInfo';
import Espace from '../components/Espace';
import HomeCategory from '../components/HomeCategory';
import AddObjectif from '../components/ObjectifList/AddObjectif';
import { Text, View } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>



      

      {/* <Espace/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
});
