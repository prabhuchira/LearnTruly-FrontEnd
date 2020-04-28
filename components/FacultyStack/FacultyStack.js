import * as React from 'react';
import {createAppContainer, NavigationActions} from 'react-navigation';
import FacultyDashboard from './FacultyDashboard';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import GetStudents from './getStudents2';


const FacultyStack = createStackNavigator(
  {
    events: {
      screen: FacultyDashboard,
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

export default FacultyStack;
