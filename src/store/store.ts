import { configureStore } from "@reduxjs/toolkit";
import masiniSlice from './cars/cars.reducers'
import thunk from "redux-thunk";
const store = configureStore({
    reducer:{
        masiniState:masiniSlice
    },
    middleware :[thunk],
});

export default store;