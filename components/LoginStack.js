import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './Login';
import SignUp from './SignUp';


const LoginStack = createStackNavigator({
    login:{
        screen:Login,
        navigationOptions:{
            headerShown:false
        }
    },
    signup:SignUp
},{

    defaultNavigationOptions:{
        headerTransparent:true,
        headerBackTitleStyle:{
            color:"white",
            backgroundColor:"white"
        },
        headerTintColor:"white",
        headerTitle:''
    }
})

export default createAppContainer(LoginStack);