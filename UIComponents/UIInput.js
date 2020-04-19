import * as React from 'react';

import {Input, withTheme} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';
import inputStyles from './UIStyles/InputStyles';



const UIInput = (props)=>{
    

    console.log(props)
    return(
        <Input {...props}  {...inputStyles} placeholderTextColor={"rgba(48, 48, 48,0.4)"}
        
        leftIcon={()=>{
            return <Icon color={"rgba(48, 48, 48,0.7)"} name={props.icon_name} size={20} ></Icon>
        }}

        errorStyle={
            {
                color:"rgb(184, 184, 184)",
                fontWeight:"bold",
                // color:withTheme,
                // letterSpacing:??/
                // fontSize:15
                fontFamily:"Montserrat-Regular"
            }
        }

        
        />
        
    
        
    )
}

export default UIInput;