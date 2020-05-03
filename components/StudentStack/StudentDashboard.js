import * as React from 'react';

import {Overlay} from 'react-native-elements';
import {View, TouchableOpacity, Text, Button, AsyncStorage, ActivityIndicator, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Feather';
import CreateClass from './CreateClass';
import UICard from '../../UIComponents/UICard';
import {ScrollView} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CLASSES_FUNC } from '../../redux/actions/actions';
import { getDeviceId, getUniqueId } from 'react-native-device-info';
import Axios from 'axios';
// import {useSelector, useDispatch} from 'react-redux';


const StudentDashboard = props => {
  // console.log('getting token')
  const win = useSelector(state=>state);
  const dispatch = useDispatch();
  
 let ignore = false;
  const _signOutAsync = async () => {
    await AsyncStorage.clear();
   props.navigation.navigate('Auth');
  };

  const Loading = ()=>{
    return(
      <ActivityIndicator></ActivityIndicator>
    )
  }




  const [state, setState] = React.useState(false); //set to false

  const [values, setValues] = React.useState([]);

  const [isLoading,setIsLoading] = React.useState(true);


  const changeState = () => {
    setState(!state);
  };

  React.useEffect(()=>{

    
    const getAccount = async() => {
      try{
        let token = await AsyncStorage.getItem('loginToken');
        let user = await Axios.get('http://192.168.0.100:3000/getUser',
        {
          headers:{
            "auth-token":token
          }
        }
        
        )

        console.log(user.data,"GET ACCOUNT");

        if(!user.data.isActivated){
          Alert.alert("Account Not Activated","Please consult your management to get your account activated or if Locked.",[{text:"Sure",onPress:()=>{props.navigation.navigate('login')}}])
        }
        console.log(getUniqueId())
        if(user.data.registeredPhoneId !== getUniqueId()){
          console.log(user.data.registeredPhoneId);
          console.log(getDeviceId());
          Alert.alert("Phone changed ?","Consult Management.",[{text:"Sure",onPress:()=>{props.navigation.navigate('login')}}])
        }
    
      }
      catch(e){
        throw new Error(e);
      }
     
    }

    getAccount();

    // if(win.getUser.registeredPhoneId == getDeviceId()){
    //   Alert.alert('Phone changed !'," Consult Management to change your phone",[{text:"Sure",onPress:()=>{props.navigation.navigate('login')}}])
    // }

    

    const getClasses = async ()=>{
      await  dispatch(GET_CLASSES_FUNC());
      setIsLoading(false);
   }
    getClasses();
    // console.log(win,"Windows");
 
  },[]);


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Overlay isVisible={state} onBackdropPress={changeState} height={530}>
        <CreateClass closeModal={changeState} />
      </Overlay>

      {win.classes.length >= 0 ? (
        <ScrollView>
          {win.classes.map((item, index) => {
            return (
              <TouchableOpacity activeOpacity={0.6}>
                <UICard
                  key={index}
                  className={item.className}
                  facultyName={item.facultyName}
                  no_of_students={item.no_of_students}
                  selectBranch={item.selectBranch}
                  year={item.year}
                  edit={() => {
                    // changeState();
                    
                    props.navigation.navigate('getStudents',{className:item.className,selectBranch:item.selectBranch})
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : <Loading></Loading>}

      {/* <Button onPress={_signOutAsync} title="drone" /> */}
      <Button onPress={()=>_signOutAsync() } title="drone" />
        
        
        
        {/* {
          isLoading ? <Loading></Loading> : win.classes.map(item=>{
            return   <Text>{JSON.stringify(item)}</Text>
          })
        } */}
    

      <ActionButton
        buttonColor={'white'}
        renderIcon={() => <Icon name="plus" color="#3671bf" size={25} />}>
        <ActionButton.Item
          buttonColor="white"
          title="Create Class"
          onPress={() => setState(true)}>
          <Icon name="mail" color="#3671bf" size={20} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

StudentDashboard['navigationOptions'] = ({navigation,props}) => {
  return {
    headerTitle: 'Classes',
    headerStyle: {
      // backgroundColor:"#3671bf",
      // backgroundColor:
    },
    // headerTintColor:"white",
    headerRight: () => {
      // console.log(props,"muther")
      return (
        <View style={{flexDirection:"row",padding:10}}>
           {/* <Icon
          name="sync"
          onPress={() => {
            dispatch(GET_CLASSES_FUNC())
          }}
          color="rgb(184, 184, 184)"
          size={25}
          style={{marginHorizontal:20}}
        /> */}


        <Icon
          name="settings"
          onPress={() => {
            navigation.toggleDrawer();
          }}
          color="rgb(184, 184, 184)"
          size={25}
         
        />
         

        </View>
      );
    },
    headerRightContainerStyle: {
      marginHorizontal: 20,
      elevation: 15,
    },
  };
}


export default StudentDashboard;
