
const modal = {
    isVisible:false,
    values:[]
};




const modalReducer = (state = modal,action) =>{


    if(action.type == "IS_VISIBLE"){
        
  
         return state
    }
    


    return state;
}

export default modalReducer;