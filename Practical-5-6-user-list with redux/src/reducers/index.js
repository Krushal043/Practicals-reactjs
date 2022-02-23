import {combineReducers} from 'redux';
import {contactReducer} from './userReducer';

export default combineReducers({
    contact: contactReducer,
})