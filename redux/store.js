import Redux, {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './../reducers/reducers'

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
