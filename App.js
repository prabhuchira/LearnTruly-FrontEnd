import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, Text, Dimensions, Alert} from 'react-native';

import {Provider} from 'react-redux';
import FullStack from './components/FullStack';
import Store from './redux/store';

import NetInfo from '@react-native-community/netinfo'
import MapView, { Marker } from 'react-native-maps';



const App = props => {


  React.useEffect(()=>{
    console.log(props,"asds")

  //  setInterval(()=>{
  //     NetInfo.fetch().then(res=>{
  //       console.log(res.isConnected)
  //       if(res.isConnected == false)
  //       {
  //         Alert.alert('No internet',"No internet restart app if connected",[{text:"ok",onPress:()=>{}}])
  //       }
  //     })
  //   },10000)

    
  //   return ()=>clearInterval(interval)

  
  
    
 
  })

  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        
        <FullStack></FullStack>

        

        {/* <MapView style={styles.mapStyle}  region={location} onPress={e => 
          setLocation({
            latitude:e.nativeEvent.coordinate.latitude,
            longitude:e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          })
        }
         
        >

         <Marker title="windows" coordinate={location}  onSelect={(event)=>{console.log(event)}} ></Marker>
       </MapView> */}
       
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

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },



});

export default App;
