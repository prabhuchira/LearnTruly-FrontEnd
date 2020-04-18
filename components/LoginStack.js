import * as React from 'react';

import {Text,View,Image,StyleSheet, ImageBackground} from 'react-native';



const Login = () => {
    return(
        <View style={styles.container}>
            
            <Image source={require('./../assets/images/Logo-wo-background.png')} resizeMode="center" style={styles.logo} />
                <View>
                    
                </View> 
            
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#3671bf",
        // backgroundColor:"red",
        // back
        
    },
    logo:{
        width:350,
        height:150,
    }
   
})