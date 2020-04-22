import Redux, {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  data: null,
};
const SampleReducer = (state = initialState, action) => {
  if (action.type == 'FETCH_DATA') {
    console.log(action.data);
    return state;
  }
  return state;
};

const Store = createStore(SampleReducer, applyMiddleware(thunk));

export default Store;
