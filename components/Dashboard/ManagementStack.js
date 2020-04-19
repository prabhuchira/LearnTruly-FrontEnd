import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import ManagementDashboard from './ManagementDashboard';
import { createStackNavigator } from 'react-navigation-stack';
import  Icon  from 'react-native-vector-icons/Feather';



const ManagementStack = createStackNavigator({
    events:{
        screen:ManagementDashboard,
        navigationOptions:{
            headerTitle:"Events",
            headerStyle:{
                // backgroundColor:"#3671bf",
                // backgroundColor:
               
                
            },
            // headerTintColor:"white",
            headerRight:()=>{
                return <Icon name="settings" color="rgb(184, 184, 184)" size={25} ></Icon>
            },
            headerRightContainerStyle:{
                marginHorizontal:20,
                elevation:15,

            },
            
           
           
            
        
        }
    },
    
},{

    defaultNavigationOptions:{
        headerTitleAlign:"center",
    
        
    }
})

export default ManagementStack;