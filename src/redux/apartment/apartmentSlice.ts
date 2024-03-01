import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {},
    price: {},
    pagination: {},
    sort: {},
    search: {},
}

const apartmentSlice = createSlice({
    name:"apartment",
    initialState,
    reducers: {
        setApartments: (state,action) => {
            state.filters = action.payload.filters,
            state.price = action.payload.price,
            state.pagination = action.payload.pagination,
            state.sort = action.payload.sort,
            state.search = action.payload.search
        }
    }
})

export const {setApartments} = apartmentSlice.actions
export default apartmentSlice.reducer