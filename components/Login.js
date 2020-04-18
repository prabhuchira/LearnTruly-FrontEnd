import * as React from 'react';

import {Text,View,Image,StyleSheet,StatusBar, Keyboard} from 'react-native';

import UIButton from '../UIComponents/UIButton';
import UIInput from '../UIComponents/UIInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Login = (props) => {
    
    return(
        
        <View style={styles.container} >
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <StatusBar backgroundColor="#3671bf"></StatusBar>
            
            <Image  source={require('./../assets/images/Logo-wo-background.png')} resizeMode="center" style={styles.logo} />
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

               <View style={{alignItems:"center"}}> 
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

               
                </TouchableWithoutFeedback>
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