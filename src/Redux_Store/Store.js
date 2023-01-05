import {configureStore} from '@reduxjs/toolkit'
import reducer from './Reducers/combineReducers';


const Store = configureStore({reducer})

export default Store;