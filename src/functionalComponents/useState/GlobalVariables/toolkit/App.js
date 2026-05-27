import { configureStore } from '@reduxjs/toolkit'
import countReducer from './reducer'

let store = configureStore({
    reducer:{
        store:countReducer,        
    }
})
export default store