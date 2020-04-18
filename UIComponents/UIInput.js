import * as React from 'react';

import {Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';
import inputStyles from './UIStyles/InputStyles';



const UIInput = (props)=>{
    
   
    console.log(props)
    return(
        <Input {...props}  {...inputStyles} placeholderTextColor={"rgba(48, 48, 48,0.4)"}
        
        leftIcon={()=>{
            return <Icon color={"rgba(48, 48, 48,0.7)"} name={props.icon_name} size={20} ></Icon>
        }}

        

        
        />
        
    
        
    )
}

export default UIInput;