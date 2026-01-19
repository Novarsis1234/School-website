// src/redux/infrastructureSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence";

export const fetchInfrastructures = createAsyncThunk(
  "infrastructures/fetchInfrastructures",
  async () => {
    const res = await getRequest("infrastructure");
    console.log("Infrastructures API response:", res.data);
    return res.data; // backend returns { success, data: [...] }
  }
);

const infrastructureSlice = createSlice({
  name: "infrastructures",
  initialState: {
    infrastructures: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfrastructures.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInfrastructures.fulfilled, (state, action) => {
        // FIX: use data array
        state.infrastructures = Array.isArray(action.payload.data)
          ? action.payload.data
          : [];
        state.loading = false;
      })
      .addCase(fetchInfrastructures.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch infrastructures";
      });
  },
});

export default infrastructureSlice.reducer;
