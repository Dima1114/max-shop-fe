import {combineReducers} from 'redux'
import listReducer from "./listReducer";
import imageReducer from "./imageReducer";
import authReducer from "./authReducer";

export default combineReducers({
    list: listReducer,
    image: imageReducer,
    auth: authReducer
});
