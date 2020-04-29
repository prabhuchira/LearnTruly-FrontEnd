import * as React from 'react';
import {Formik} from 'formik';
import UIInput from '../../UIComponents/UIInput';


import {Input,Button,Slider,Text} from 'react-native-elements'
import {  View, AsyncStorage} from 'react-native';
import UIButton from '../../UIComponents/UIButton';
import {ButtonGroup} from 'react-native-elements'
import {Picker} from '@react-native-community/picker';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { PUSH_EVENT_FUNC } from '../../redux/actions/actions';

const CreateEvent = (props) => {
    const [state,setState] = React.useState(0);
    const buttons = ["Ist","IInd","IIIrd","IVth"];
    const dispatch = useDispatch();

    const postData = async(data) => {
        console.log(data)
        
        // try{
        //     let token = await AsyncStorage.getItem('loginToken')
        //     await Axios.post("http://192.168.0.101:3000/createEvent",{
        //         topicName:data.topicName,className:data.className,selectBranch:data.selectBranch,selectYear:data.selectYear
               
        //     },{
        //         headers:{
        //             "Auth-Token":token
        //         }
        //     }
           
        //     )
        //     ;

            
            
              
                
            
            
            
            
           
        //     // console.log(res);
        // }
        // catch(e){
        //     throw new Error(e);
        // }

        dispatch(PUSH_EVENT_FUNC(data))
    } 

    let initialValues = {topicName:"",className:"",selectYear:0,  selectBranch:0,};
    let branches = [
        {viewValue:'CSE',value:'cse'},
        {viewValue:'ECE',value:'ece'},
        {viewValue:'EEE',value:'eee'},
        {viewValue:'IT',value:'it'},
        {viewValue:'Mechanical',value:'mech'},
        {viewValue:'Civil',value:'civil'},
    ]

    const [branch, setBranch] = React.useState({
        branch: 'Student',
      });

      
    return(
      
       <Formik initialValues={initialValues} 
       
       onSubmit={
           (data)=>{
               console.log(data);
            
            postData(data);

          
           props.closeModal();
        }
        
        } 
       
       
                validate={values=>{
                    const errors={};  
                        if(values.topicName === ''){
                            errors.topicName = "Topic Name is required"
                        }

                        if(values.className === ''){
                            errors.className = "Class Name is required"
                        }
                        else if(values.className.includes(' ')){
                            errors.className = "No spaces"
                        }

                        if(values.selectClass === ''){
                            errors.selectClass = "Class Name is required"
                        }
                      
                        return errors;
                    
                    }}
        >
           {
               ({values,isValid,touched,handleChange,handleBlur,setFieldValue,handleSubmit,errors})=>(
                    // <UIInput placeholder="ClassName" onChange={handleChange} onBlur={handleBlur}></UIInput>
                    <View style={{alignItems:"stretch",flex:1}}>
                 <Text
                    style={{textAlign: 'left',fontSize:16,fontWeight:"bold", marginLeft: 10, color: "rgba(48, 48, 48,0.5)"}}>
                    Register as{' '}
                    <Text style={{fontStyle: 'italic'}}>
                      (longpress to select)
                    </Text>
                  </Text>
                        <View style={{alignItems:"center",margin:10}}>
                        <View style={buttonStyles2.pickerStyles}>
                    
                                            <Picker
                                            
                                            style={{color:"rgba(48, 48, 48,0.7)",fontSize:23}}
                                                mode="dialog"
                                                placeholder="drone"
                                                selectedValue={branch.branch}
                                                prompt="Be careful you cant change it again!"
                                                onValueChange={(itemValue, itemIndex) => {
                                                    
                                                setFieldValue('selectBranch', itemValue);
                                                setBranch({branch: itemValue});
                                            
                                                }}
                                                
                                                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                                                onPress={event => {
                                                //   console.log(event);
                                                
                                                }}>
                                                    {
                                                        branches.map(item=>{
                                                            return <Picker.Item label={item.viewValue} value={item.value} />
                                                        })
                                                    }

{/*                                                 
                                                <Picker.Item label="ECE" value="ece" />
                                                <Picker.Item label="EEE" value="eee" />
                                                <Picker.Item label="EEE" value="eee" /> */}
                                            </Picker>
                        </View>
                        </View>

                        <Input label={"Topic Name"} placeholder="Topic Name" onChangeText={handleChange("topicName")} onBlur={handleBlur("topicName")} 
                        
                        errorMessage={errors.topicName && touched.topicName ? errors.topicName : ''} errorStyle={{color:"red"}}>

                        </Input>
                        <Text></Text>
                        <Input  label={"ClassName"} placeholder="Class" onChangeText={handleChange("className")} onBlur={handleBlur("className")} 
                        
                        errorMessage={errors.className && touched.className ? errors.className : ''} errorStyle={{color:"red"}}>

                        </Input>

                        <View style={{marginTop:20}}>
                            <Text style={{marginLeft:10,fontSize:16}}>Year:</Text>
                            <ButtonGroup selectedButtonStyle={{backgroundColor:"#3671bf"}} selectedIndex={values.selectYear} buttons={buttons} containerStyle={{width:300}} onPress={(selectedIndex)=>
                                setFieldValue('selectYear',selectedIndex)
                            }>
                    
                            </ButtonGroup>

                         </View>
                        
                        {/* <Slider  maximumValue={50} step={1} onValueChange={(value)=>setFieldValue("no_of_students",value)}  style={{marginTop:20,marginHorizontal:10}} thumbTintColor="#3671bf" maximumTrackTintColor="#3671bf" ></Slider> */}
                    
                        {/* <Text style={{textAlign:"center"}}>No of Students in Class: {values.no_of_students}</Text> */}
                        <Button disabled={!isValid} title="ADD CLASSS" buttonStyle={buttonStyles2.buttonStyle} titleStyle={buttonStyles2.titleStyle} onPress={
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

export default CreateEvent;

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
    },

    pickerStyles: {
        width: 300,
        height: 50,
        backgroundColor: 'white',
        marginVertical: 5,
        borderWidth:1,
        borderColor:"rgba(48, 48, 48,0.4)",
        borderRadius:3,
        
      },
}