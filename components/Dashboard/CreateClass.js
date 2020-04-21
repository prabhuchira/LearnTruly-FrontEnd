import * as React from 'react';
import {Formik} from 'formik';
import UIInput from '../../UIComponents/UIInput';


import {Input,Button,Slider,Text} from 'react-native-elements'
import {  View} from 'react-native';
import UIButton from '../../UIComponents/UIButton';
import {ButtonGroup} from 'react-native-elements'


const CreateClass = (props) => {
    const [state,setState] = React.useState(0);
    const buttons = ["Ist","IInd","IIIrd","IVth"]

    let initialValues = {className:"",facultyName:"",no_of_students:0,year:0}




    return(
      
       <Formik initialValues={initialValues} 
       
       onSubmit={
           (data)=>{
       
          
           props.closeModal();}
        
        } 
       
       
                validate={values=>{
                    const errors={};  
                        if(values.className === ''){
                            errors.className = "Class Name is required"
                        }
                        else if(values.className.includes(' ')){
                            errors.className = "No spaces"
                        }

                        if(values.facultyName === ''){
                            errors.facultyName = "Faculty Name is required"
                        }
                        if(values.no_of_students <= 0){
                            errors.no_of_students ="Minimum one student is required."
                        }
                        return errors;
                    
                    }}
        >
           {
               ({values,isValid,touched,handleChange,handleBlur,setFieldValue,handleSubmit,errors})=>(
                    // <UIInput placeholder="ClassName" onChange={handleChange} onBlur={handleBlur}></UIInput>
                    <View style={{alignItems:"stretch",flex:1}}>

                        <Input label={"Class"} placeholder="ClassName" onChangeText={handleChange("className")} onBlur={handleBlur("className")} 
                        
                        errorMessage={errors.className && touched.className ? errors.className : ''} errorStyle={{color:"red"}}>

                        </Input>
                        <Text></Text>
                        <Input  label={"Assign Faculty"} placeholder="Faculty name" onChangeText={handleChange("facultyName")} onBlur={handleBlur("facultyName")} 
                        
                        errorMessage={errors.facultyName && touched.facultyName ? errors.facultyName : ''} errorStyle={{color:"red"}}>

                        </Input>

                        <View style={{marginTop:20}}>
                            <Text style={{marginLeft:10,fontSize:16}}>Year:</Text>
                            <ButtonGroup selectedButtonStyle={{backgroundColor:"#3671bf"}} selectedIndex={values.year} buttons={buttons} containerStyle={{width:300}} onPress={(selectedIndex)=>
                                setFieldValue('year',selectedIndex)
                            }>
                    
                            </ButtonGroup>

                         </View>
                        
                        <Slider  maximumValue={50} step={1} onValueChange={(value)=>setFieldValue("no_of_students",value)}  style={{marginTop:20,marginHorizontal:10}} thumbTintColor="#3671bf" maximumTrackTintColor="#3671bf" ></Slider>
                    
                        <Text style={{textAlign:"center"}}>No of Students in Class: {values.no_of_students}</Text>
                        <Button disabled={!isValid} title="ADD CLASS" buttonStyle={buttonStyles2.buttonStyle} titleStyle={buttonStyles2.titleStyle} onPress={
                            ()=>{
                            handleSubmit();
                           
                            }

                        } ></Button>

                        
                    </View>

               )
           }
       </Formik>
 
    )
}

export default CreateClass;

const buttonStyles2 = {
    buttonStyle:{
        
            width:null,
            height:50,
            elevation:1,
            backgroundColor:"#3671bf",
            marginVertical:30,
            
    },

    titleStyle:{
        fontFamily:"Montserrat-SemiBold",
        fontSize:16,
        letterSpacing:1,
        color:"white"
    }
}