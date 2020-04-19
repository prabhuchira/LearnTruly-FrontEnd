import * as React from 'react';

import { View, Image, StyleSheet, StatusBar, Keyboard, Text,ScrollView } from 'react-native';


import UIButton from '../UIComponents/UIButton';
import UIInput from '../UIComponents/UIInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Formik } from 'formik';

import { Picker } from '@react-native-community/picker';



const SignUp = (props) => {
    // console.log('asd')
    // console.log(props.navigation.params)

    const [state, setState] = React.useState({
        language: 'Student',
    })



    return (
        <ScrollView>
        <View style={styles.container}>
             
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <StatusBar backgroundColor="#3671bf"></StatusBar>
             
                <Image source={require('./../assets/images/Logo-wo-background.png')} resizeMode="contain" style={styles.logo} />
                <View style={{ alignItems: "center" }}>
               
                    <Formik
                        initialValues={{
                            fullname: '',
                            surname:'',
                            selectCourse: '',
                            roll_no:'',
                            email:'',
                            address:'',
                            phone_no:0

                        }}

                        onSubmit={(data, { setSubmitting }) => {
                            setSubmitting(true);
                            //make async call here
                            console.log(data)
                            setTimeout(() => {
                                setSubmitting(false)
                            }, 5000)

                        }}

                        validate={(values) => {
                            const errors = {};
                            if (values.fullname.includes(546)) {
                                errors.fullname = "No 546 is allowed"
                            }
                            return errors;
                        }}
                    >
                        {
                            ({ values, setFieldValue, handleChange, errors, touched, handleBlur, handleSubmit, isSubmitting, isValid }) =>
                                (   <View>
                                    <Text style={{textAlign:"left",marginLeft:10,color:"white"}}>Register as</Text>
                                    <View style={{ alignItems: "center" }}>
                                        
                                        <View style={styles.pickerStyles}>
                                           
                                            <Picker mode="dialog" placeholder="drone"

                                                selectedValue={state.language} prompt="Select" onValueChange={(itemValue, itemIndex) => { setFieldValue("selectCourse", itemValue); setState({ language: itemValue }); }}
                                               
                            
                                            >
                                                <Picker.Item label="Student" value="student"></Picker.Item>
                                                <Picker.Item label="Faculty" value="faculty"></Picker.Item>
                                                <Picker.Item label="Mangement" value="management"></Picker.Item>
                                            </Picker>
                                        </View>



                                        <UIInput placeholder="Fullname"
                                            icon_name="user"
                                            onChangeText={handleChange("fullname")}
                                            onBlur={handleBlur("fullname")}
                                            errorMessage={errors.fullname && touched.fullname ? errors.fullname : ''}
                                        ></UIInput>

                                        <UIInput placeholder="Surname"
                                            icon_name="user"
                                            onChangeText={handleChange("surname")}
                                            onBlur={handleBlur("surname")}
                                            errorMessage={errors.surname && touched.surname ? errors.surname : ''}
                                        ></UIInput>

                                        

                                        <UIInput placeholder="Roll no"
                                            icon_name="key"
                                            
                                         
                                            onChangeText={handleChange("roll_no")}
                                            onBlur={handleBlur("roll_no")}

                                            type="number"
                                        ></UIInput>

                                        <UIInput placeholder="Email"
                                            icon_name="mail"
                                          
                                         
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}

                                            
                                        ></UIInput>

                                        <UIInput placeholder="Address"
                                            icon_name="home"
                                          
                                         
                                            onChangeText={handleChange("address")}
                                            onBlur={handleBlur("address")}

                                            
                                           
                                        ></UIInput>

                                        
                                    <UIInput placeholder="Phone Number"
                                            icon_name="phone"
                                          
                                         
                                            onChangeText={handleChange("phone_no")}
                                            onBlur={handleBlur("phone_no")}

                                            
                                           
                                        ></UIInput>
                                        

                                        <UIButton disabled={(!isValid || isSubmitting)} onPress={handleSubmit} title="SIGNUP"  ></UIButton>
                                        {/* <Text >{JSON.stringify(values, null, 2)}</Text> */}
                                    </View>
                                    </View>   
                                )
                        }

                    </Formik>



               
                </View>

               
            </TouchableWithoutFeedback>
            
        </View>
        </ScrollView>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3671bf",
        // backgroundColor:"red",
        // back

    },
    logo: {
        width: 350,
        height: 150,
        marginTop:40
    },
    pickerStyles:{
            width: 330,
            height: 50,
            backgroundColor: "white",
            marginVertical:5    
    }

})