
import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text
} from 'react-native';


import { Provider } from 'react-redux';
import Store from './redux/store';
import LoginStack from './components/AuthStack/LoginStack'

const App = (props) => {



  return (
      <Provider store={Store}>
        <View style={styles.container}>


          <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
          <LoginStack></LoginStack>
          {/* <Text>Drone</Text> */}

        </View>
        </Provider>
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


export default  App;
