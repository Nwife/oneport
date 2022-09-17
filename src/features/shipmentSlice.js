import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  shipments: [],
  error: "",
};

export const fetchShipment = createAsyncThunk("shipment/fetchShipment", () => {
  return axios
    .get("https://demo3522726.mockable.io/get_single_customer_shipments/123456789")
    .then((res) => res.data);
});

const shipmentSlice = createSlice({
  name: "customer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchShipment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShipment.fulfilled, (state, action) => {
      state.loading = false;
      state.shipments = action.payload;
      state.error = "";
    });
    builder.addCase(fetchShipment.rejected, (state, action) => {
      state.loading = false;
      state.shipments = [];
      state.error = action.error.message;
    });
  },
});

export default shipmentSlice.reducer;
