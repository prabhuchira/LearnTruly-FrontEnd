import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import * as React from 'react';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { Text, View, Dimensions } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import AppStack from './AppStack';


const Tabs = createBottomTabNavigator({
    
    management:{
        screen:AppStack,
        navigationOptions:{
            tabBarIcon:()=>{
                return <Icon name="list" size={20}> </Icon>
            },
            tabBarLabel:"Dashboard"
        }
    },
    
    },
    {
        tabBarOptions:{
            // inactiveBackgroundColor:"#3671bf",
            // activeTintColor:"black"
    }
    }
)


// const Tabs = createMaterialTopTabNavigator({
    
//     login:{
//         screen:StudentDashboard,
//         navigationOptions:{
//             tabBarIcon:()=>{
//                 return <Icon name="list" size={20}> </Icon>
//             },
//             tabBarLabel:"Attendance"
//         }
        
//     },
//     signup:SignUp
//     },
// {
//     tabBarOptions:{
//         inactiveBackgroundColor:"#3671bf",
//         activeTintColor:"black"
// }
// })



export default createAppContainer(Tabs);