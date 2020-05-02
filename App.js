import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, Text, Dimensions} from 'react-native';

import {Provider} from 'react-redux';
import FullStack from './components/FullStack';
import Store from './redux/store';

import MapView, { Marker } from 'react-native-maps';




const App = props => {

  const [location,setLocation] = React.useState({
    latitude:37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
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
