import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';

import {Provider} from 'react-redux';
import Store from './redux/store';
import AuthStack from './components/AuthStack/AuthStack';
import AppTabs from './components/AppStack/AppTabs';
import AuthLoadingScreen from './components/AuthLoadingScreen/AuthLoadingScreen';
import FullStack from './components/FullStack';




const App = props => {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* <AuthLoadingScreen></AuthLoadingScreen> */}

        {/* <FullStack></FullStack> */}
        <AppTabs></AppTabs>
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
