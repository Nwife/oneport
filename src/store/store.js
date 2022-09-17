import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../features/customerSlice';
import shipmentReducer from '../features/shipmentSlice';

const store = configureStore({
    reducer:{
        customer: customerReducer,
        shipment: shipmentReducer
    }
})

export default store;
