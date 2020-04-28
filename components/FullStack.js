import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthLoadingScreen from './AuthLoadingScreen/AuthLoadingScreen';
import AuthStack from './AuthStack/AuthStack';
import { useSelector } from 'react-redux';
import { View,ActivityIndicator,StatusBar } from 'react-native';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.



import React from 'react';
import FacultyTabs from './FacultyStack/FacultyTabs';
import StudentTabs from './StudentStack/StudentTabs';
import ManagementTabs from './ManagementStack/ManagementTabs';


const TestingComponent = (props) =>{
  const selector = useSelector(state=>state.getUser); 
  React.useEffect(()=>{

    
    if(selector.selectCourse == "faculty"){
      props.navigation.navigate('Faculty')
    }
    else if(selector.selectCourse == "student"){
      props.navigation.navigate('Student')
    }
    else{
      props.navigation.navigate('Management')
    }
    
  })

 

    return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
            <StatusBar barStyle="light-content" backgroundColor="#3671bf"/>
            <ActivityIndicator  color="#3671bf" size={50} />
    </View>)
}




const FullStack =  createAppContainer(
  createSwitchNavigator(
   {
      AuthLoading: AuthLoadingScreen,
      App: TestingComponent,
      Auth: AuthStack,
      Faculty:FacultyTabs,
      Management:ManagementTabs,
      Student:StudentTabs
    },
    {
      initialRouteName: 'AuthLoading',
    }
  
    
  )
);

export default FullStack;