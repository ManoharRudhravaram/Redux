import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import sortReducer from '../Reducer/sortReducer';
import cartReducer from '../Reducer/cartReducer';

export let rootReducer=combineReducers({
   fetchReducer,sortReducer,cartReducer
})