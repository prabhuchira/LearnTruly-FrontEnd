
const events = [];




const facultyEventReducer = (state = events,action) =>{


    if(action.type == "GET_EVENTS"){
        // console.log("DRONE")
        // console.log(action.data,"mycroft")
         return [...action.data]
    }
    
    if(action.type=="PUSH_EVENT"){
        
        return  [...state,action.data];
    }

    return state;
}

export default facultyEventReducer;