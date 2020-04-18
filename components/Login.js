import * as React from 'react';

import {Text,View,Image,StyleSheet,StatusBar, Keyboard} from 'react-native';

import UIButton from '../UIComponents/UIButton';
import UIInput from '../UIComponents/UIInput';
import { TouchableWithoutFeedback, TextInput } from 'react-native-gesture-handler';

import {Formik} from 'formik'
const Login = (props) => {
    
    return(
        
        <View style={styles.container} >
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <StatusBar backgroundColor="#3671bf"></StatusBar>
            
            <Image  source={require('./../assets/images/Logo-wo-background.png')} resizeMode="center" style={styles.logo} />
                <View style={{alignItems:"center"}}>

                  
                   <Formik 
                   initialValues={{
                       roll_no:'',
                       password:''
                   }}

                   onSubmit={(data,{setSubmitting})=>{
                        setSubmitting(true);
                        //make async call here
                        console.log(data)
                        setTimeout(()=>{
                            setSubmitting(false)
                        },5000)
                        
                    }}

                    validate={(values)=>{
                        const errors={};
                        if(values.roll_no.includes(546))
                        {
                            errors.roll_no = "No 546 is allowed"
                        }
                        return errors;
                    }}
                   >
                       {
                           ({values,handleChange,errors,touched,handleBlur,handleSubmit,isSubmitting,isValid})=>
                           (   
                               <View style={{alignItems:"center"}}> 
                                
                                <UIInput placeholder="Email"
                                    icon_name="mail"
                                    onChangeText={handleChange("roll_no")}
                                    onBlur={handleBlur("roll_no")}
                                    errorMessage={errors.roll_no && touched.roll_no ? errors.roll_no : ''}
                                ></UIInput>

                                <UIInput placeholder="Password"
                                     icon_name="lock"
                                    secureTextEntry={true}
                                    right_icon_name="eye-off"
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    
                                                    
                                ></UIInput>

                                <UIButton disabled={(!isValid || isSubmitting)} onPress={handleSubmit}title="LOGIN"  ></UIButton>
                                <Text >{JSON.stringify(values,null,2)}</Text>
                                </View>
                               
                           )
                       }
                      
                   </Formik>


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