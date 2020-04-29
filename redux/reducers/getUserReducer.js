

const account = {
   
};




const getUserReducer = (state = account,action) =>{


    if(action.type == "GET_USER_ACCOUNT"){
        // console.log("DRONE")
        // console.log(action.data,"mycroft");
        console.log(action.data,"GET_USER");
        
         return action.data
    }

    
 


    return state;
}

export default getUserReducer;