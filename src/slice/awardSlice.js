// src/slice/awardSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // Your Axios instance

// ===============================
// Fetch all awards
// ===============================
export const fetchAwards = createAsyncThunk(
  "awards/fetchAwards",
  async () => {
    try {
      const res = await getRequest("awards"); // endpoint: /api/v1/awards
      console.log("Awards API response:", res.data);

      // Ensure we always return an array
      if (res.data && Array.isArray(res.data.data)) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Failed to fetch awards:", error);
      throw error;
    }
  }
);

// ===============================
// Slice
// ===============================
const awardSlice = createSlice({
  name: "awards",
  initialState: {
    awards: [],       // must be array
    loading: false,
    error: null,
  },
  reducers: {
    // Optional: local reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAwards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAwards.fulfilled, (state, action) => {
        state.awards = Array.isArray(action.payload) ? action.payload : [];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAwards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch awards";
        state.awards = [];
      });
  },
});

export default awardSlice.reducer;
