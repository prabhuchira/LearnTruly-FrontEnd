import * as React from 'react';

import {Button} from 'react-native-elements'
import buttonStyles from './UIStyles/ButtonStyles';


const UIButton = (props)=>{
    return(
        <Button {...props} buttonStyle={buttonStyles.buttonStyle} titleStyle={buttonStyles.titleStyle}>

        </Button>
    )
}

export default UIButton;