import * as React from 'react';

import {Overlay} from 'react-native-elements';
import {View, TouchableOpacity, Text, Button, AsyncStorage, ActivityIndicator, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Feather';
import CreateClass from './CreateClass';
import UICard from '../../UIComponents/UICard';
import {ScrollView} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CLASSES_FUNC,GET_EVENTS_STUDENTS_FUNC } from '../../redux/actions/actions';
import { getDeviceId, getUniqueId } from 'react-native-device-info';
import Axios from 'axios';
import UIEventCard from '../../UIComponents/UIEventCard';
import CreateEvent from '../FacultyStack/CreateEvent';
// import {useSelector, useDispatch} from 'react-redux';
import * as Permissions from "expo-permissions";


const StudentDashboard = props => {
  // console.log('getting token')
  const win = useSelector(state=>state);
  const dispatch = useDispatch();
  const [current_account,setCurrent_account] = React.useState({})

  
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

  const [editItem,setEditItem] = React.useState(null);
  const [myEvents,setMyEnvents] = React.useState({});
  let [num,setNum] = React.useState(0);

  const changeState = () => {
    setState(!state);
  };

  const changeNum = () => {
    setNum(num++);
  }

  React.useEffect(()=>{
    console.log('loggedin');

    const registerFunc = async()=> {
      const { status } = await Permissions.getAsync(Permissions.LOCATION);
      // let {status} = await Permissions.askAsync(Permissions.LOCATION);
      
      console.log(status);
  
      if (status !== 'granted') {
        const {status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status!=="granted"){
          Alert.alert('GPS Request',"This app needs GPS To work,On and Restart app again",[{text:"Ok",onPress:()=>{props.navigation.navigate('Auth')}}]);
          
        }
      }
  
    }
    
  
    registerFunc();

 

    
    const getAccount = async() => {
      try{
        let token = await AsyncStorage.getItem('loginToken');
        let user = await Axios.get('http://192.168.0.105:3000/getUser',
        {
          headers:{
            "auth-token":token
          }
        }
        
        )

        console.log(user.data,"GET ACCOUNT");
        setCurrent_account(user.data)

        if(!user.data.isActivated){
          Alert.alert("Account Not Activated","Please consult your management to get your account activated or if Locked.",[{text:"Sure",onPress:()=>{props.navigation.navigate('login')}}])
        }
        console.log(getUniqueId())
        // if(user.data.registeredPhoneId !== getUniqueId()){
        //   console.log(user.data.registeredPhoneId);
        //   console.log(getDeviceId());
        //   Alert.alert("Phone changed ?","Consult Management.",[{text:"Sure",onPress:()=>{props.navigation.navigate('login')}}])
        // }
    
      }
      catch(e){
        throw new Error(e);
      }
     
    }

    getAccount();

    // if(win.getUser.registeredPhoneId == getDeviceId()){
    //   Alert.alert('Phone changed !'," Consult Management to change your phone",[{text:"Sure",onPress:()=>{props.navigation.navigate('login')}}])
    // }

  
    
    const getEvents = async ()=>{
      let events =  await  dispatch(GET_EVENTS_STUDENTS_FUNC());
      console.log(events,"All Events")
      setIsLoading(false);

      

   }
    getEvents();

    console.log(current_account,"Current Account")   
    console.log(win)
    // console.log(win,"Windows");
 
  },[]);


  return (
    <View style={{flex: 1, backgroundColor: 'white',marginBottom:20}}>
      <Overlay fullScreen isVisible={state} onBackdropPress={changeState} height={530}>
        
        <CreateEvent closeModal={changeState} editItem={editItem}  changeNum={changeNum}/>
        
      </Overlay>


      {win.events.length >= 0 ? (
        <ScrollView style={{marginTop:10}}>
          {win.events.map((item, index) => {
            console.log(item);
          
           return (   <TouchableOpacity activeOpacity={0.6}  >
                
                <UIEventCard
                  key={index}
                  className={item.className}
                  topicName={item.topicName}
                  selectBranch={item.selectBranch}
                  year={item.selectYear}
                  fromdate={item.fromdateAndTime}
                  edit={() => {
                    // changeState();

                    // props.navigation.navigate('getStudents2',{className:item.className,selectBranch:item.selectBranch})
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : <Loading></Loading>}

      
      <Button onPress={()=>_signOutAsync() } title="drone" />
        
        
        
        {/* {
          isLoading ? <Loading></Loading> : win.classes.map(item=>{
            return   <Text>{JSON.stringify(item)}</Text>
          })
        } */}
    

      <ActionButton
        buttonColor={'#26a1f5'}
        // elevation={10}
        renderIcon={() => <Icon name="plus" color="white" size={25} />}>
        <ActionButton.Item
          buttonColor="white"
          title="Create Event"
          onPress={() => {setEditItem(null);setState(true)}}>
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
