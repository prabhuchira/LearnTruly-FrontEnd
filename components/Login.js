import * as React from 'react';

import {Text,View,Image,StyleSheet, ImageBackground,StatusBar} from 'react-native';

import {Button,Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';
import UIButton from '../UIComponents/UIButton';
import UIInput from '../UIComponents/UIInput';


const Login = (props) => {
    
    return(
        
        <View style={styles.container}>
            <StatusBar backgroundColor="#3671bf"></StatusBar>
            
            <Image source={require('./../assets/images/Logo-wo-background.png')} resizeMode="center" style={styles.logo} />
                <View style={{alignItems:"center"}}>

                  
                   

                    <UIInput placeholder="Email"
                        icon_name="mail"
                    ></UIInput>

                    <UIInput placeholder="Password"
                        icon_name="lock"
                        secureTextEntry={true}
                        right_icon_name="eye-off"
                      
                    ></UIInput>
                     <UIButton title="LOGIN" ></UIButton>


                </View> 


                <View style={{flexDirection:"row",marginVertical:20}}>
                    <Text style={{color:"white"}}>Don`t have an Account?</Text>
                    <Text style={{color:"white",fontWeight:"bold"}}
                        onPress={()=>props.navigation.navigate({
                            routeName:'signup',
                            params:{
                                title:'login'
                            }
                        })}
                    > Sign up!</Text>
                </View>

                <View style={{marginVertical:0}}>
                    <Text style={{color:"white"}}>Forgot password?</Text>
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