import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Slices/weatherSlices"


const store = configureStore({
	reducer: weatherReducer,
})

export default store;