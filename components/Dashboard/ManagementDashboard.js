import * as React from 'react';

import {Text, Overlay, Card} from 'react-native-elements';

import { View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import SignUp from '../SignUp';
import Login from '../Login';
import ActionButton from 'react-native-action-button'
import  Icon from 'react-native-vector-icons/Feather';
import CreateClass from './CreateClass';


const ManagementDashboard = (props) =>{
    const [state,setState] = React.useState(false);

    const [values,setValues] = React.useState([]);

    const changeState = () => {
       
        setState(!state);
        
    }

    const getValue = (val) => {
        console.log("before")
        console.log(values)
        setValues([{...val}])
        console.log('after')
        console.log(values)
    }

    return(


       


        <View style={{flex:1,backgroundColor:"white"}}>
      
            
        <Overlay isVisible={state} onBackdropPress={changeState} height={380}>
            <CreateClass closeModal={changeState} getValue={getValue}></CreateClass>
        </Overlay>
              

      

                <View style={
                    {
                    flex:1,
                    alignItems:"center",
                    maxHeight:200,
                   
                    backgroundColor:"#4387e0",
                    marginHorizontal:15,
                    marginTop:20,
                    borderRadius:10,
                    elevation:10,
                
                    }}>

                </View>













            <ActionButton buttonColor={"#56667A"} renderIcon={()=><Icon name="plus"  color="white" size={25}></Icon>} >
                <ActionButton.Item buttonColor='#3671bf'  title="Create Class" onPress={()=>setState(true)}>
                    <Icon name="mail" color="white" size={20}></Icon>
                </ActionButton.Item>
            </ActionButton>
      
        </View>
    )
}

export default ManagementDashboard;