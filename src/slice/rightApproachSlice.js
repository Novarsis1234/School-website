import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence";

// ============================
// Fetch all Right Approaches
// ============================
export const fetchRightApproaches = createAsyncThunk(
  "rightApproach/fetchRightApproaches",
  async () => {
    try {
      const res = await getRequest("rightapproach"); 
      // endpoint: /api/v1/right-approach
      console.log("RightApproach API response:", res.data);
      return res.data?.data || []; // ✅ clean array
    } catch (error) {
      console.error("Failed to fetch Right Approaches:", error);
      throw error;
    }
  }
);

const rightApproachSlice = createSlice({
  name: "rightApproach",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRightApproaches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRightApproaches.fulfilled, (state, action) => {
        state.list = action.payload; // ✅ array of cards
        state.loading = false;
      })
      .addCase(fetchRightApproaches.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch right approaches";
      });
  },
});

export default rightApproachSlice.reducer;
