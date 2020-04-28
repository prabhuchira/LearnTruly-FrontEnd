import * as React from 'react';

import {Text,View,Image,StyleSheet,StatusBar, Keyboard, AsyncStorage} from 'react-native';

import UIButton from './../../UIComponents/UIButton';
import UIInput from './../../UIComponents/UIInput';
import { TouchableWithoutFeedback, TextInput } from 'react-native-gesture-handler';



import {Formik} from 'formik'
// import { useDispatch,useSelector } from 'react-redux';
// import {getUserToken} from './../../actions/actions';

const ForgotPassword = (props) => {
    // const checkToken = useDispatch();
    const  [tokenThere,setTokenThere] = React.useState("not there") 

  

    // React.useEffect(()=>{
    //  checkToken(getUserToken());
        

    // console.log(state.token.token,"wonderful")
    //     if(state.token.token){
    //         setTokenThere("there")
    //     }

    // },[])

    const Empty = ()=><Text>{tokenThere}</Text>

    return(
        
        <View style={styles.container} >
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <StatusBar backgroundColor="#3671bf"></StatusBar>
            
            <Image  source={require('./../../assets/images/Logo-wo-background.png')} resizeMode="center" style={styles.logo} />
                <View style={{alignItems:"center"}}>

                  
                   <Formik 
                   initialValues={{
                    recovery_email:''
                      
                   }}

                   onSubmit={(data,{setSubmitting})=>{
                        setSubmitting(true);
                        //make async call here
                        setTimeout(()=>{
                            setSubmitting(false)
                        },5000)
                        
                    }}

                    validate={(values)=>{
                        const errors={};
                        if (!values.recovery_email.includes('@gmail.com')){
                            errors.recovery_email = "Not a valid email"
                        }else if (values.recovery_email == '') {
                        errors.recovery_email = "email name is required"
                        }
                        return errors;
                    }}
                   >
                       {
                           ({values,handleChange,errors,touched,handleBlur,handleSubmit,isSubmitting,isValid})=>
                           (   
                               <View style={{alignItems:"center"}}> 
                                
                                <UIInput placeholder="Enter Recovery mail"
                                    icon_name="mail"
                                    onChangeText={handleChange("recovery_email")}
                                    onBlur={handleBlur("recovery_email")}
                                 
                                    errorMessage={errors.recovery_email && touched.recovery_email ? errors.recovery_email : ''}
                                ></UIInput>


                                <UIButton disabled={(!isValid || isSubmitting)} onPress={handleSubmit}title="RESET"  ></UIButton>
                                {/* <Text >{JSON.stringify(values,null,2)}</Text> */}
                                {/* <Empty></Empty> */}
                                </View>
                               
                           )
                       }
                      
                   </Formik>


                </View> 

               

               
                </TouchableWithoutFeedback>
        </View>
    
        
    )
}

export default ForgotPassword;

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