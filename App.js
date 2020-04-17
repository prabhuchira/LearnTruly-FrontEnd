/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';




const App = ()=>{
  return(
    <View style={styles.container}>
      <Text style={{fontSize:20,color:"purple"}}>Drone</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    flex:1,
    alignItems:"center",
 
  }

})


export default App;
