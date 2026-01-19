import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // same helper you use elsewhere


export const fetchBuses = createAsyncThunk(
  "buses/fetchBuses",
  async () => {
    try {
      // Make sure your backend route is /api/v1/buses
      const res = await getRequest("bus");
      console.log("Buses API response:", res.data);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch buses:", error);
      throw error;
    }
  }
);

const busSlice = createSlice({
  name: "buses",
  initialState: {
    buses: [],
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBuses.fulfilled, (state, action) => {
        state.buses = action.payload;
        state.loading = false;
      })
      .addCase(fetchBuses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch buses";
      });
  },
});

export default busSlice.reducer;
