import * as React from 'react';

import {Text, Overlay, Card} from 'react-native-elements';

import { View, Dimensions,  TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import SignUp from '../SignUp';
import Login from '../Login';
import ActionButton from 'react-native-action-button'
import  Icon from 'react-native-vector-icons/Feather';
import CreateClass from './CreateClass';


import LinearGradient from 'react-native-linear-gradient';
import UICard from '../../UIComponents/UICard';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';

const ManagementDashboard = (props) =>{

   

    const [state,setState] = React.useState(false);

    const [values,setValues] = React.useState([]);
    
    const [item,selectedItem] = React.useState(0);

    const changeState = () => {
       
        setState(!state);
        
    }

    const getValue = (val) => {
        console.log("before")
        console.log(values)

        setValues(
         [...values,val]
        )

        console.log('after')
        console.log(values)
    }

    return(


       


        <View style={{flex:1,backgroundColor:"white"}}>
      
            
        <Overlay isVisible={state} onBackdropPress={changeState}
        
                height={490}
        
        
        >
            <CreateClass closeModal={changeState}></CreateClass>
        </Overlay>
              

      
        

            {
                values.length >= 0 ?
                <ScrollView>
                    {values.map((item,index)=>{



                        return   (
                        <TouchableOpacity activeOpacity={0.6} >
                            <UICard key={index} className={item.className} facultyName={item.facultyName} no_of_students={item.no_of_students} year={item.year} 
                                edit={()=>{   changeState();}}>
                            </UICard>
                         </TouchableOpacity>
                        )

                    })}

              
               
                </ScrollView>
            :
            null
            }









            <ActionButton buttonColor={"#56667A"} renderIcon={()=><Icon name="plus"  color="white" size={25}></Icon>} >
                <ActionButton.Item buttonColor='#3671bf'  title="Create Class" onPress={()=>setState(true)}>
                    <Icon name="mail" color="white" size={20}></Icon>
                </ActionButton.Item>
            </ActionButton>
      
        </View>
    )
}

export default ManagementDashboard;