import * as React from 'react';
import {createAppContainer, NavigationActions} from 'react-navigation';
import StudentDashboard from './StudentDashboard';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import GetStudents3 from './getStudents3';


const StudentStack = createStackNavigator(
  {
    events: {
      screen: StudentDashboard,
    },

    getStudents3:{
      screen:GetStudents3
    }
  },
  {
   
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
    },
  },
);

export default StudentStack;
