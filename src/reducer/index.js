import {combineReducers} from 'redux'
import allPhoto from './allphoto'
import page from './page'
import yvalue from './yvalue'

export default combineReducers({
    photo: allPhoto,
    page,
    yvalue,
})