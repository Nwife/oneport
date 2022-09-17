import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    customers: [],
    error: ''
}

export const fetchCustomers = createAsyncThunk('customer/fetchCustomer', () => {
    return axios.get('https://demo3522726.mockable.io/get_customers')
    .then(res => res.data)
})

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCustomers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchCustomers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default customerSlice.reducer