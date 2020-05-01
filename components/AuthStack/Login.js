import * as React from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Keyboard,
  AsyncStorage,
  Alert,
} from 'react-native';

import UIButton from './../../UIComponents/UIButton';
import UIInput from './../../UIComponents/UIInput';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Formik, isString} from 'formik';
import DeviceInfo, { getDeviceId } from 'react-native-device-info'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { GET_USER_ACCOUNT_FUNC } from '../../redux/actions/actions';


const Login = props => {

  const dispatch = useDispatch();
  React.useEffect(()=>{
    // DeviceInfo.getSerialNumber().then(res=>console.log(res))
  })
  const _signInAsync = async data => {
    await AsyncStorage.setItem('loginToken', data);
    props.navigation.navigate('App');
  };

  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  let Empty = () => <Text style={{color: 'white'}} />;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <StatusBar backgroundColor="#3671bf" barStyle="light-content" />

        <Image
          source={require('./../../assets/images/Logo-wo-background.png')}
          resizeMode="center"
          style={styles.logo}
        />
        <View style={{alignItems: 'center'}}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async (data, {setSubmitting}) => {
              setSubmitting(true);

              Axios.post('http://192.168.0.101:3000/login', {
                email: data.email,
                password: data.password,
              })
                .then(res => {
                  
                  console.log(res.data,"asdsd");

                  if(res.data.selectCourse=="student"){
                     if(res.data.isActivated){
                       props.navigation.navigate('Login')
                     }
                  }
              
                  
                  
                  dispatch(GET_USER_ACCOUNT_FUNC(res.data));
                  
                  
                  let val = isString(res.data);
                  if (val) {
                    Empty = () => (
                      <Text style={{color: 'white'}}>{res.data}</Text>
                    );
                  }
                  _signInAsync(res.headers['auth-token']); //here token is coming from server
                })
                .catch(error => console.log(error));

              setTimeout(() => {
                setSubmitting(false);
              }, 5000);
            }}
            validate={values => {
              const errors = {};
              if (values.email.includes(546)) {
                errors.email = 'No 546 is allowed';
              } else if (values.email == '') {
                errors.email = 'Email is required';
              }

              if (values.password == '') {
                errors.password = 'Password is required';
              }
              return errors;
            }}>
            {({
              values,
              handleChange,
              errors,
              touched,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
            }) => (
              <View style={{alignItems: 'center'}}>
                <UIInput
                  placeholder="Email"
                  icon_name="mail"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errorMessage={
                    errors.email && touched.email ? errors.email : ''
                  }
                />

                <UIInput
                  placeholder="Password"
                  icon_name="lock"
                  secureTextEntry={true}
                  right_icon_name="eye-off"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  errorMessage={
                    errors.password && touched.password ? errors.password : ''
                  }
                />

                <Empty />

                <UIButton
                  disabled={!isValid || isSubmitting}
                  onPress={handleSubmit}
                  title="LOGIN"
                />
                {/* <UIButton onPress={_signOutAsync} title="Remove Token" /> */}
                {/* <UIButton  onPress={()=>dispatch(removeUserToken())}title="LOGIN"  ></UIButton> */}
              </View>
            )}
          </Formik>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Text style={{color: 'white'}}>Don`t have an Account?</Text>
            <Text
              style={{color: 'white', fontWeight: 'bold'}}
              onPress={() =>
                props.navigation.navigate({
                  routeName: 'signup',
                  params: {
                    title: 'login',
                  },
                })
              }>
              {' '}
              Signup!
            </Text>
          </View>
          <View style={{marginVertical: 0}}>
            <Text
              style={{color: 'white'}}
              onPress={() =>
                props.navigation.navigate({
                  routeName: 'forgotPassword',
                  params: {
                    title: 'login',
                  },
                })
              }>
              Forgot password?
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;

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
  },
});
