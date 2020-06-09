import * as React from 'react';

import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Keyboard,
  Text,
  ScrollView,
  Alert,
} from 'react-native';

import UIButton from './../../UIComponents/UIButton';
import UIInput from './../../UIComponents/UIInput';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Formik, isString, isObject, ErrorMessage} from 'formik';

import {Picker} from '@react-native-community/picker';
import Axios from 'axios';
import {getUniqueId} from   "react-native-device-info"
const SignUp = props => {
  const [state, setState] = React.useState({
    language: 'Student',
  });

  const [branch, setBranch] = React.useState({
    branch:"CSE"
  });

  const [year, setYear] = React.useState({
    year: 'Ist Year',
  });

  let branches = [
    {viewValue: 'CSE', value: 'cse'},
    {viewValue: 'ECE', value: 'ece'},
    {viewValue: 'EEE', value: 'eee'},
    {viewValue: 'IT', value: 'it'},
    {viewValue: 'Mechanical', value: 'mech'},
    {viewValue: 'Civil', value: 'civil'},
  ];

  let years = [
    {viewValue: 'Ist Year', value: '0'},
    {viewValue: 'IInd Year', value: '1'},
    {viewValue: 'IIIrd Year', value: '2'},
    {viewValue: "IVth Year", value: '3'},
  ];

  let Empty = () => <Text style={{color: 'white'}} />;

  React.useEffect(()=>{
    let a = getUniqueId()
    console.log(a);
  },[])

  return (
    <ScrollView style={{backgroundColor: '#3671bf'}}>
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <StatusBar backgroundColor="#3671bf" barStyle="light-content" />

          <Image
            source={require('./../../assets/images/Logo-wo-background.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={{alignItems: 'center'}}>
            <Formik
              initialValues={{
                student_id: '',
                staff_id: '',
                management_id: '',
                fullname: '',
                aadhar_no: 0,
                selectCourse: 'student',
                roll_no: '',
                email: '',
                password: '',
                phone_no: 0,
                password: '',
                section: '',
                selectBranch: '0',
                selectYear:'0'
              }}
              onSubmit={async (data, {setSubmitting}) => {
                setSubmitting(true);
                //make async call here

                const allItems = {
                  fullname: data.fullname,
                  aadhar_no: data.aadhar_no,
                  selectCourse: data.selectCourse,
                  roll_no: data.roll_no,
                  email: data.email,
                  password: data.password,
                  phone_no: data.phone_no,
                  section: data.section,
                  selectYear:data.selectYear,
                  selectBranch:data.selectBranch
                  
                };
                let container = {};

                if (data.student_id !== '') {
                  container = {student_id: data.student_id, ...allItems,registeredPhoneId:getUniqueId()};
                } else if (data.staff_id !== '') {
                  container = {staff_id: data.staff_id, ...allItems};
                } else {
                  container = {management_id: data.management_id, ...allItems};
                }

                await Axios.post('http://192.168.0.105:3000/signup', container)
                  .then(res => {
                    let val = isString(res.data);
                    if (val) {
                      Empty = () => (
                        <Text style={{color: 'white'}}>{res.data}</Text>
                      );
                    } else {
                      Alert.alert(
                        'Registered Successfully',
                        'Login with your details',
                        [
                          {
                            text: 'Ok',
                            onPress: () => props.navigation.navigate('login'),
                          },
                        ],
                      );
                      Empty = () => <Text style={{color: 'white'}} />;
                    }
                  })
                  .catch(e => console.log(e));

                setSubmitting(false);
              }}
              validate={values => {
                const errors = {};

                // if (values.selectCourse == 'student')
                //   if (values.student_id === '')
                //     errors.student_id = 'Student ID is required';

                // if (values.selectCourse == 'faculty')
                //   if (values.staff_id === '')
                //     errors.staff_id = 'Staff ID is required';

                // if (values.selectCourse == 'management')
                //   if (values.management_id === '')
                //     errors.management_id = 'Management ID is required';

                // if (values.fullname === '') {
                //   errors.fullname = 'Full name is required';
                // } else if (values.fullname.length < 14) {
                //   errors.fullname = 'Should be more than 14 characters';
                // }

                // if (!values.email.includes('@gmail.com')) {
                //   errors.email = 'Not a valid email';
                // } else if (values.email === '') {
                //   errors.email = 'email name is required';
                // }

                // if (values.phone_no.length > 12) {
                //   errors.phone_no = 'Cant exceed more than 12 digits';
                // } else if (values.phone_no === '') {
                //   errors.phone_no = 'Phone number is required';
                // }

                // if (values.roll_no === '') {
                //   errors.roll_no = 'Roll No number is required';
                // }

                // if (values.password === '') {
                //   errors.password = 'Address number is required';
                // }

                // if (values.section === '') {
                //   errors.section = 'Section is required';
                // }

                // if (values.aadhar_no === '') {
                //     errors.aadhar_no = 'Aadhar_no number is required';
                // }
                //   else if (values.aadhar_no.length !== 12  )
                //   errors.aadhar_no = 'Aadhar_no requires 12 digits';

                return errors;
              }}>
              {({
                values,
                setFieldValue,
                handleChange,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
              }) => (
                <View>
                  <Text
                    style={{textAlign: 'left', marginLeft: 10, color: 'white'}}>
                    Register as{' '}
                    <Text style={{fontStyle: 'italic'}}>
                      (longpress to select)
                    </Text>
                  </Text>
                  <View style={{alignItems: 'center', marginBottom: 50}}>
                    <View style={styles.pickerStyles}>
                      <Picker
                        mode="dialog"
                        placeholder="drone"
                        selectedValue={state.language}
                        prompt="Be careful you cant change it again!"
                        onValueChange={(itemValue, itemIndex) => {
                          setFieldValue('selectCourse', itemValue);
                          setState({language: itemValue});
                          (values.staff_id = ''),
                            (values.student_id = ''),
                            (values.management_id = '');
                        }}
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                        onPress={event => {
                          //   console.log(event);
                        }}>
                        <Picker.Item label="Student" value="student" />
                        <Picker.Item label="Faculty" value="faculty" />
                        <Picker.Item label="Mangement" value="management" />
                      </Picker>
                    </View>


                    {values.selectCourse == "student" ?
                        <View>
                        <View style={styles.pickerStyles}>
                        <Picker
                          style={{color: 'rgba(48, 48, 48,0.7)', fontSize: 23}}
                          mode="dialog"
                          placeholder="Branch"
                          selectedValue={branch.branch}
                          prompt="Be careful you cant change it again!"
                          onValueChange={(itemValue, itemIndex) => {
                            setFieldValue('selectBranch', itemValue);
                            setBranch({branch: itemValue});
                          }}
                          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                          onPress={event => {
                            //   console.log(event);
                          }}>
                          {branches.map(item => {
                            return (
                              <Picker.Item
                                label={item.viewValue}
                                value={item.value}
                              />
                            );
                          })}
                        </Picker>
                        </View>
                        
                        <View style={styles.pickerStyles}>
                        <Picker
                          style={{color: 'rgba(48, 48, 48,0.7)', fontSize: 23}}
                          mode="dialog"
                          placeholder="Year"
                          selectedValue={year.year}
                          prompt="Be careful you cant change it again!"
                          onValueChange={(itemValue, itemIndex) => {
                            setFieldValue('selectYear', itemValue);
                            setYear({year: itemValue});
                          }}
                          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                          onPress={event => {
                            //   console.log(event);
                          }}>
                          {years.map(item => {
                            return (
                              <Picker.Item
                                label={item.viewValue}
                                value={item.value}
                              />
                            );
                          })}
                        </Picker>
                      </View>
                      </View>
                      
  
                      :null
                  
                    }

                   

                   
                    {values.selectCourse == 'student' ? (
                      <UIInput
                        placeholder="Student ID "
                        icon_name="hash"
                        onChangeText={handleChange('student_id')}
                        onBlur={handleBlur('student_id')}
                        errorMessage={
                          errors.student_id && touched.student_id
                            ? errors.student_id
                            : ''
                        }
                      />
                    ) : null}

                    {values.selectCourse == 'faculty' ? (
                      <UIInput
                        placeholder="Staff ID "
                        icon_name="hash"
                        onChangeText={handleChange('staff_id')}
                        onBlur={handleBlur('staff_id')}
                        errorMessage={
                          errors.staff_id && touched.staff_id
                            ? errors.staff_id
                            : ''
                        }
                      />
                    ) : null}

                    {values.selectCourse == 'management' ? (
                      <UIInput
                        placeholder="Management ID "
                        icon_name="hash"
                        onChangeText={handleChange('management_id')}
                        onBlur={handleBlur('management_id')}
                        errorMessage={
                          errors.management_id && touched.management_id
                            ? errors.management_id
                            : ''
                        }
                      />
                    ) : null}

                    <UIInput
                      placeholder="Fullname"
                      icon_name="user"
                      onChangeText={handleChange('fullname')}
                      onBlur={handleBlur('fullname')}
                      errorMessage={
                        errors.fullname && touched.fullname
                          ? errors.fullname
                          : ''
                      }
                    />

{values.selectCourse == 'student' ? (

                    <UIInput
                      placeholder="Roll no"
                      icon_name="award"
                      onChangeText={handleChange('roll_no')}
                      onBlur={handleBlur('roll_no')}
                      errorMessage={
                        errors.roll_no && touched.roll_no ? errors.roll_no : ''
                      }
                    />) : null
                  }

                    <UIInput
                      placeholder="Email"
                      icon_name="mail"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      errorMessage={
                        errors.email && touched.email ? errors.email : ''
                      }
                    />
                  {values.selectCourse == 'student' ? 
                    <UIInput
                      placeholder="Section"
                      icon_name="briefcase"
                      onChangeText={handleChange('section')}
                      onBlur={handleBlur('section')}
                      errorMessage={
                        errors.section && touched.section ? errors.section : ''
                      }
                    />
                    :null
                  }

                    <UIInput
                      placeholder="Password"
                      icon_name="key"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      errorMessage={
                        errors.password && touched.password
                          ? errors.password
                          : ''
                      }
                    />

                    <UIInput
                      placeholder="Phone Number"
                      icon_name="phone"
                      onChangeText={handleChange('phone_no')}
                      onBlur={handleBlur('phone_no')}
                      keyboardType="number-pad"
                      // defaultValue="91"
                      errorMessage={
                        errors.phone_no && touched.phone_no
                          ? errors.phone_no
                          : ''
                      }
                    />

                    <UIInput
                      placeholder="Aadhar No"
                      icon_name="flag"
                      onChangeText={handleChange('aadhar_no')}
                      keyboardType="number-pad"
                      onBlur={handleBlur('aadhar_no')}
                      errorMessage={
                        errors.aadhar_no && touched.aadhar_no
                          ? errors.aadhar_no
                          : ''
                      }
                    />

                    <Empty />

                    <UIButton
                      disabled={!isValid || isSubmitting}
                      onPress={() => handleSubmit()}
                      title="SIGNUP"
                    />
                    <View style={{flexDirection: 'row', marginVertical: 0}}>
                      <Text style={{color: 'white'}}>
                        Already have an Account?
                      </Text>
                      <Text
                        style={{color: 'white', fontWeight: 'bold', width: 40}}
                        onPress={() =>
                          props.navigation.navigate({
                            routeName: 'login',
                            params: {
                              title: 'signup',
                            },
                          })
                        }>
                        Login
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3671bf',
    // backgroundColor:"red",
    // back
  },
  logo: {
    width: 350,
    height: 150,
    marginTop: 20,
  },
  pickerStyles: {
    width: 330,
    height: 50,
    backgroundColor: 'white',
    marginVertical: 5,
  },
});
