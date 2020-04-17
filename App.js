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
  Button,
} from 'react-native';

import Stack from './screens/stack'


const App = (props)=>{
  
  return(
    <View style={styles.container}>
      <Text style={{fontSize:20,color:"purple"}}>Drone</Text>
      {/* <Stack></Stack> */}
     
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    // paddingTop:20,
    flex:1  
   
 
  }

})


export default App;
