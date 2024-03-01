import { configureStore } from "@reduxjs/toolkit";
import apartmentReducer from "./apartment/apartmentSlice";

const store = configureStore({
    reducer: {
        apartment:apartmentReducer
    }
})

export default store