import Axios from "axios";
import { AsyncStorage } from "react-native";

export const GET_CLASSES = "GET_CLASSES";
export const PUSH_CLASS = "PUSH_CLASS";
export const GET_STUDENTS = "GET_STUDENTS";
export const ACTIVATE_USER_STRING = "ACTIVATE_USER_STRING";

export const PUSH_CLASS_FUNC = (data) => ({
    type:PUSH_CLASS,
    data:data
})

// const token = async() => await AsyncStorage.getItem('loginToken')

export const GET_CLASSES_FUNC = () => {
    
    return async dispatch => {
       let token = await AsyncStorage.getItem('loginToken');
        await Axios.get('http://192.168.0.100:3000/getClasses',{headers:{
            "Auth-Token":token
        }}).then(
          (data)=>dispatch({
              type:GET_CLASSES,
              data:data.data
          })
        )
    }
} 





export const GET_STUDENTS_FUNC = (className,selectBranch) => {
    console.log(className,selectBranch,"From Students");
    return async dispatch => {
       let token = await AsyncStorage.getItem('loginToken');
        await Axios.get('http://192.168.0.100:3000/getStudents',{headers:{
            "Auth-Token":token,
            "className":className,
            "branch":selectBranch
        }
    
    
    }).then(
          (data)=>dispatch({
              type:GET_STUDENTS,
              data:data.data
          })
        )
    }
} 

export const ACTIVATE_USER = (item,index) => {
    
    // console.log(item)

    return async dispatch => {
        let token = await AsyncStorage.getItem('loginToken');
        await Axios.post('http://192.168.0.100:3000/activateStudent',{

            activate_id:item._id,
            isActivated:item.isActivated
            
        },{
            headers:{
                "Auth-Token":token,
                // "activate_id":item._id,
                // "isActivated":item.isActivated
            },

        }).then(res=>{
            dispatch({
                type:ACTIVATE_USER_STRING,
                index:index,
                data:res.data
            })
        })
      
       
    }
}

export const GET_ALL_REQUESTS_FUNC = () => {
    
   
    return async dispatch => {
       let token = await AsyncStorage.getItem('loginToken');
        await Axios.get('http://192.168.0.100:3000/getAllRequests',{headers:{
            "Auth-Token":token
            
        }
    
    
    }).then(
          (data)=>dispatch({
              type:"GET_ALL_REQUESTS",
              data:data.data
          })
        )
    }
} 

export const APPROVE_REQUEST_FUNC = (item,index) => {
    
   
    return async dispatch => {
       let token = await AsyncStorage.getItem('loginToken');
        await Axios.post('http://192.168.0.100:3000/approveRequest',{
            activate_id:item._id
        },{headers:{
            "Auth-Token":token
            
        }
    
    
    }).then(
          (data)=>dispatch({
              type:"APPROVE_REQUEST",
              data:data.data,
              index:index
          })
        )
    }
} 

export const PUSH_EVENT_FUNC = (body) => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('loginToken');
        await Axios.post('http://192.168.0.100:3000/createEvent',{
            ...body
        },{headers:{"Auth-Token":token}}).then(
            (data)=>
            dispatch({
                type:"PUSH_EVENT",
                data:data.data
            })
        )
    }
}


export const MODIFY_EVENT_FUNC = (body) => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('loginToken');
        await Axios.post('http://192.168.0.100:3000/modifyEvent',{
            ...body
        },{headers:{"Auth-Token":token}}).then(
            (data)=>
            dispatch({
                type:"MODIFY_EVENT",
                data:data.data,
                
            })
        )
    }
}

export const GET_USER_ACCOUNT_FUNC = (body)=>{
    return async dispatch => {
        
        await AsyncStorage.setItem('myaccount',body.selectCourse);
        
        dispatch(
            {type:"GET_USER_ACCOUNT",data:body}
        )
    }
}


export const GET_EVENTS_FUNC = () => {
    
    return async dispatch => {
       let token = await AsyncStorage.getItem('loginToken');
        await Axios.get('http://192.168.0.100:3000/getEvents',{headers:{
            "Auth-Token":token
        }}).then(
          (data)=>dispatch({
              type:"GET_EVENTS",
              data:data.data
          })
        )
    }
} 
