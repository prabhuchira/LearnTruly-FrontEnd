import * as React from 'react';
import {createAppContainer, NavigationActions} from 'react-navigation';
import ManagementDashboard from './ManagementDashboard';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Feather';

const AppStack = createStackNavigator(
  {
    events: {
      screen: ManagementDashboard,

      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Events',
          headerStyle: {
            // backgroundColor:"#3671bf",
            // backgroundColor:
          },
          // headerTintColor:"white",
          headerRight: () => {
            return (
              <Icon
                name="settings"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
                color="rgb(184, 184, 184)"
                size={25}
              />
            );
          },
          headerRightContainerStyle: {
            marginHorizontal: 20,
            elevation: 15,
          },
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
    },
  },
);

export default AppStack;
