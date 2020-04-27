import {GET_CLASSES,PUSH_CLASS} from './../actions/actions'

const classes = [];




const classesReducer = (state = classes,action) =>{


    if(action.type == GET_CLASSES){
        // console.log("DRONE")
        // console.log(action.data,"mycroft")
         return [...action.data]
    }
    
    if(action.type==PUSH_CLASS){
        console.log('Push classes');
        
        return  [...state,action.data];
    }

    return state;
}

export default classesReducer;