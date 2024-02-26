import { createStore } from "redux";
import useReducer  from './reducers';

const store = creatStore(useReducer);
export default store;