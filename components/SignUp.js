import * as React from 'react';

import {View,Image,StyleSheet,StatusBar, Keyboard, } from 'react-native';


import UIButton from '../UIComponents/UIButton';
import UIInput from '../UIComponents/UIInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const SignUp = (props) => {
    console.log('asd')
    console.log(props.navigation.params)
    
    return(
        
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <StatusBar backgroundColor="#3671bf"></StatusBar>
            
            <Image source={require('./../assets/images/Logo-wo-background.png')} resizeMode="center" style={styles.logo} />
                <View style={{alignItems:"center"}}>

                  
                   

                    <UIInput placeholder="Name"
                        icon_name="mail"
                    ></UIInput>

                    <UIInput placeholder="FirstName"
                        icon_name="lock"
                       
                      
                    ></UIInput>
                     <UIButton title="SIGN UP" 
                    
                     ></UIButton>


                </View> 

                
                </TouchableWithoutFeedback>
              
        </View>
        
    )
}

export default SignUp;

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