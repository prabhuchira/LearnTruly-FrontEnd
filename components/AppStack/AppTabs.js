import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import * as React from 'react';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { Text, View, Dimensions } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import AppStack from './AppStack';
import GetAllStudentStack from '../GetAllStudentRequests/GetAllStudentStack';




const Tabs = createBottomTabNavigator({
    
    management:{
        screen:AppStack,
        navigationOptions:{
            tabBarIcon:()=>{
                return <Icon name="list" size={20}> </Icon>
            },
            tabBarLabel:"Classes"
        }
    },
    requests:{
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