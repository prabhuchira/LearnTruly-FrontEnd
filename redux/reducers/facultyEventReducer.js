
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

    if(action.type=="MODIFY_EVENT"){
      
        let outerindex = 0;
        let DeletedValues =  state.filter((item,index)=>{


            if(item._id == action.data._id){
                outerindex = index ;
                return index;
            }


        })
        console.log(outerindex);


        console.log(action.data,"action data");
        const start = state.slice(0,outerindex);//(0,index-1);
        const end = state.slice(outerindex+1,state.length);
        // console.log(start)
        // console.log('Endsdas')
        // console.log(end)
        return [...start,action.data,...end];
       
        // console.log(k);
  
        console.log(DeletedValues,"deleted")

    }

    if(action.type == "DELETE_EVENT"){
        
        let nonDeletedItems = state.filter(item=>item._id !== action.data.body._id)
        


            
        return nonDeletedItems;    
            
       
    }

    return state;
}

export default facultyEventReducer;