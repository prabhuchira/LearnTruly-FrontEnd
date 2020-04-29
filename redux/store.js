import * as Redux from 'redux';
import classesReducer from './reducers/classesReducer';
import thunk from 'redux-thunk';
import modalReducer from './reducers/modalReducer';
import studentReducer from './reducers/studentsReducer';
import getRequestsReducer from './reducers/getRequestsReducer';
import getUserReducer from './reducers/getUserReducer';
import facultyEventReducer from './reducers/facultyEventReducer';



let cr = Redux.combineReducers({classes:classesReducer,modal:modalReducer,getStudents:studentReducer,getRequests:getRequestsReducer,getUser:getUserReducer,events:facultyEventReducer});


const store = Redux.createStore(cr,Redux.applyMiddleware(thunk));

export default store;