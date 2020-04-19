import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import SignUp from '../SignUp';
import Icon from 'react-native-vector-icons/Feather';
import * as React from 'react';
import ManagementStack from './ManagementStack';

const Tabs = createBottomTabNavigator({
    
    login:{
        screen:ManagementStack,
        navigationOptions:{
            tabBarIcon:()=>{
                return <Icon name="list" size={20}> </Icon>
            },
            tabBarLabel:"Attendance"
        }
        
    },
    signup:SignUp
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