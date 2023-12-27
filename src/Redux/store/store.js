import {createStore ,applyMiddleware} from 'redux';
// import fetchReducer from '../Reducer/fetchReducer';
import { rootReducer } from '../Reducer';
import {thunk} from 'redux-thunk'

let store=createStore(rootReducer,applyMiddleware(thunk));

export default store;