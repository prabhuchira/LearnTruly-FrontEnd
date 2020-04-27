import {GET_STUDENTS,ACTIVATE_USER_STRING} from './../actions/actions'
import update from 'immutability-helper'
const students = [];




const studentReducer = (state = students,action) =>{


    if(action.type == GET_STUDENTS){
        // console.log("DRONE")
        // console.log(action.data,"mycroft")
         return [...action.data]
    }


    if(action.type == ACTIVATE_USER_STRING){
        const collection = state;
        const newCollection = update(collection,{[action.index]:{$set:action.data}})
        return newCollection;
    }
    
 


    return state;
}

export default studentReducer;