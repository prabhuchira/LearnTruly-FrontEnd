import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, Text, Alert} from 'react-native';

import {Provider} from 'react-redux';
import FullStack from './components/FullStack';
import Store from './redux/store';

import NetInfo from '@react-native-community/netinfo'



const App = props => {


  React.useEffect(()=>{


   setInterval(()=>{
      NetInfo.fetch().then(res=>{
        console.log(res.isConnected)
        if(res.isConnected == false)
        {
          Alert.alert('No internet',"No internet restart app if connected",[{text:"ok",onPress:()=>{}}])
        }
      })
    },10000)

    
    return ()=>clearInterval(interval)
    
 
  })

  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        
        <FullStack></FullStack>
       
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postSection: {
    color: 'purple',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
  },
});

export default App;
