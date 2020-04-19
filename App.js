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


import Stack from './screens/stack';
import Tabs from './screens/tabs';



import {Image} from 'react-native';
import Login from './components/Login';
import LoginStack from './components/LoginStack';
import DashboardStack from './components/Dashboard/DashboardTabs';

const App = (props) => {

  return (
    <View style={styles.container}>


    <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      {/* <LoginStack></LoginStack> */}
      <DashboardStack></DashboardStack>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    flex: 1,
    // alignItems: "center"
  },
  postSection:{
    color:"purple",
    fontFamily:"SourceSansPro-Regular",
    fontSize:20,
    lineHeight:30,
    textAlign:"justify",
    
  }
})


export default App;
