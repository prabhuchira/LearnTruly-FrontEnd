import * as React from 'react';
import {createAppContainer, NavigationActions} from 'react-navigation';
import StudentDashboard from './StudentDashboard';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import GetStudents from './getStudents3';


const StudentStack = createStackNavigator(
  {
    events: {
      screen: StudentDashboard,
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

export default StudentStack;
