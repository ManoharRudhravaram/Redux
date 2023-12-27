import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import sortReducer from '../Reducer/sortReducer';

export let rootReducer=combineReducers({
   fetchReducer,sortReducer
})