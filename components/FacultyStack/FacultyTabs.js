import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import * as React from 'react';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { Text, View, Dimensions } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import GetAllStudentStack from '../GetAllStudentRequests/GetAllStudentStack';
import FacultyStack from './FacultyStack';




const Tabs = createBottomTabNavigator({
    
    faculty:{
        screen:FacultyStack,
        navigationOptions:{
            tabBarIcon:()=>{
                return <Icon name="list" size={20}> </Icon>
            },
            tabBarLabel:"Faculty"
        }
    },
    requests2:{
        screen:GetAllStudentStack,
        navigationOptions:{
            tabBarIcon:()=>{
                return <Icon name="git-pull-request" size={20}> </Icon>
            },
            tabBarLabel:"Account Requests"
        }
       
    }
    
    
    },
    {
        tabBarOptions:{
            // inactiveBackgroundColor:"#3671bf",
            // activeTintColor:"black"
    }
    }
)






export default createAppContainer(Tabs);