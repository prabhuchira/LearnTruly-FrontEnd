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
        <ScrollView  style={{backgroundColor:"#3671bf"}} >
        <View style={styles.container}>
             
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <StatusBar backgroundColor="#3671bf"></StatusBar>
             
                <Image source={require('./../assets/images/Logo-wo-background.png')} resizeMode="contain" style={styles.logo} />
                <View style={{ alignItems: "center" }}>
               
                    <Formik
                        initialValues={{
                            student_id:'',
                            staff_id:'',
                            management_id:'',
                            fullname: '',
                            surname:'',
                            selectCourse: '',
                            roll_no:'',
                            email:'',
                            address:'',
                            phone_no:0,
                            

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
                            // fullname: '',
                            // surname:'',
                            // selectCourse: '',
                            // roll_no:'',
                            // email:'',
                            // address:'',
                            // phone_no:0

                            if(values.student_id === ''){
                                errors.student_id = "Student ID is required"
                            }
                            
                            if(values.staff_id === ''){
                                errors.staff_id = "Staff ID is required"
                            }
                            

                            if(values.management_id === ''){
                                errors.management_id = "Management ID is required"
                            }

                            if (values.fullname === '') {
                                errors.fullname = "Full name is required"
                            }else if(values.fullname.length < 14){
                                errors.fullname = "Should be more than 14 characters"
                            }

                            if (!values.email.includes('@gmail.com')){
                                errors.email = "Not a valid email"
                            }else if (values.email === '') {
                            errors.email = "email name is required"
                            }
                            

                            if(values.phone_no.length > 12){
                                errors.phone_no = "Cant exceed more than 12 digits"
                            }
                            else if (values.phone_no === '') {
                                errors.phone_no = "Phone number is required"
                            }

                            if (values.roll_no === '') {
                                errors.roll_no = "Roll No number is required"
                            }

                            if (values.address === '') {
                                errors.address = "Address number is required"
                            }



                            return errors;
                        }}
                    >
                        {
                            ({ values, setFieldValue, handleChange, errors, touched, handleBlur, handleSubmit, isSubmitting, isValid }) =>
                                (   <View>
                                    <Text style={{textAlign:"left",marginLeft:10,color:"white"}}>Register as <Text style={{fontStyle:"italic"}}>(longpress to select)</Text></Text>
                                    <View style={{ alignItems: "center",marginBottom:50 }}>
                                        
                                        <View style={styles.pickerStyles}>
                                           
                                            <Picker mode="dialog" placeholder="drone"

                                                selectedValue={state.language} prompt="Be careful you cant change it again!" onValueChange={(itemValue, itemIndex) => { setFieldValue("selectCourse", itemValue); setState({ language: itemValue }); }}
                                            
                                                hitSlop={{top:10,bottom:10,left:10,right:10}}
                                                onPress={(event)=>{console.log(event)}}
                                            >
                                                <Picker.Item label="Student" value="student"></Picker.Item>
                                                <Picker.Item label="Faculty" value="faculty"></Picker.Item>
                                                <Picker.Item label="Mangement" value="management"></Picker.Item>
                                            </Picker>
                                        </View>


                                        {
                                            values.selectCourse == "student" ? 
                                            <UIInput placeholder="Student ID "
                                            icon_name="hash"
                                            onChangeText={handleChange("student_id")}
                                            onBlur={handleBlur("student_id")}
                                            errorMessage={errors.student_id && touched.student_id ? errors.student_id : ''}
                                            ></UIInput>:null
                                        }

                                        {
                                            values.selectCourse == "faculty" ?
                                                <UIInput placeholder="Staff ID "
                                                icon_name="hash"
                                                onChangeText={handleChange("staff_id")}
                                                onBlur={handleBlur("staff_id")}
                                                errorMessage={errors.staff_id && touched.staff_id ? errors.staff_id : ''}
                                            ></UIInput> : null
                                        }

                                        {
                                            values.selectCourse == "management" ?
                                            <UIInput placeholder="Management ID "
                                            icon_name="hash"
                                            onChangeText={handleChange("management_id")}
                                            onBlur={handleBlur("management_id")}
                                            errorMessage={errors.management_id && touched.management_id ? errors.management_id : ''}
                                        ></UIInput> : null
                                        }
                                        

                                       

                                       


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

                                            errorMessage={errors.roll_no && touched.roll_no ? errors.roll_no : ''}
                                        ></UIInput>

                                        <UIInput placeholder="Email"
                                            icon_name="mail"
                                          
                                         
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}

                                            errorMessage={errors.email && touched.email ? errors.email : ''}
                                        ></UIInput>

                                        <UIInput placeholder="Address"
                                            icon_name="home"
                                          
                                         
                                            onChangeText={handleChange("address")}
                                            onBlur={handleBlur("address")}

                                            errorMessage={errors.address && touched.address ? errors.address : ''}
                                           
                                        ></UIInput>

                                        
                                    <UIInput placeholder="Phone Number"
                                            icon_name="phone"
                                          
                                         
                                            onChangeText={handleChange("phone_no")}
                                            onBlur={handleBlur("phone_no")}
                                            keyboardType="number-pad"
                                            // defaultValue="91"
                                            errorMessage={errors.phone_no && touched.phone_no ? errors.phone_no : ''}
                                    ></UIInput>
                                        

                                        <UIButton disabled={(!isValid || isSubmitting)} onPress={handleSubmit} title="SIGNUP"  ></UIButton>
                                        

                                        <View style={{ flexDirection: "row", marginVertical: 20 }}>
                                            <Text style={{ color: "white" }}>Already have an Account?</Text>
                                            <Text style={{ color: "white", fontWeight: "bold",width:40 }}
                                                onPress={() => props.navigation.navigate({
                                                    routeName: 'login',
                                                    params: {
                                                        title: 'signup'
                                                    }
                                                })}
                                            >Login</Text>
                                        </View>
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