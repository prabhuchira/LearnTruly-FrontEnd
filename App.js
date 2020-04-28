import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';

import {Provider} from 'react-redux';
import FullStack from './components/FullStack';
import Store from './redux/store';



const App = props => {
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
