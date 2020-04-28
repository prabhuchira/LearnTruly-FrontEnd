import * as React from 'react';
import {createAppContainer, NavigationActions} from 'react-navigation';
import ManagementDashboard from './ManagementDashboard';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import GetStudents from './getStudents';


const AppStack = createStackNavigator(
  {
    events: {
      screen: ManagementDashboard,
    },

    getStudents:{
      screen:GetStudents
    }
  },
  {
   
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
    },
  },
);

export default AppStack;
