import * as React from 'react';

import {View,Image,StyleSheet,StatusBar, Keyboard, Text, } from 'react-native';


import UIButton from '../UIComponents/UIButton';
import UIInput from '../UIComponents/UIInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Formik} from 'formik';

const SignUp = (props) => {
    // console.log('asd')
    // console.log(props.navigation.params)
    
    return(
        
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <StatusBar backgroundColor="#3671bf"></StatusBar>
            
            <Image source={require('./../assets/images/Logo-wo-background.png')} resizeMode="center" style={styles.logo} />
                <View style={{alignItems:"center"}}>

                <Formik 
                   initialValues={{
                       fullname:'',
                       surname:''
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
                        if(values.fullname.includes(546))
                        {
                            errors.fullname = "No 546 is allowed"
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
                                    onChangeText={handleChange("fullname")}
                                    onBlur={handleBlur("fullname")}
                                    errorMessage={errors.fullname && touched.fullname ? errors.fullname : ''}
                                ></UIInput>

                                <UIInput placeholder="Surname"
                                     icon_name="lock"
                                    secureTextEntry={true}
                                    right_icon_name="eye-off"
                                    onChangeText={handleChange("surname")}
                                    onBlur={handleBlur("surname")}
                                    
                                                    
                                ></UIInput>

                                <UIButton disabled={(!isValid || isSubmitting)} onPress={handleSubmit} title="SIGNUP"  ></UIButton>
                                <Text >{JSON.stringify(values,null,2)}</Text>
                                </View>
                               
                           )
                       }
                      
                   </Formik>


                  

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