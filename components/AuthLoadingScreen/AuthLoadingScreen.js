
import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';




class AuthLoadingScreen extends React.Component {

  

  componentDidMount() {
    console.log(this.props.getAccount,"AuthLoadingScreen");
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('loginToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // await Axios.get('/getUser',
    // console
    

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };


  

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator  color="white" size={50} />
        <StatusBar barStyle="light-content" backgroundColor="#3671bf"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#3671bf"

    }
})

const mapStateToProps = state => {
  return {
    getAccount:state.getUser
  }
}
export default connect(mapStateToProps,null)(AuthLoadingScreen);