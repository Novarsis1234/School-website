import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // aapka existing helper

// Async thunk to fetch exam updates
export const fetchExamUpdates = createAsyncThunk(
  "examupdates/fetchExamUpdates",
  async () => {
    try {
      // Backend route
      const res = await getRequest("examupdate"); // ensure your helper prepends api/v1
      console.log("Exam Updates API response:", res.data);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch exam updates:", error);
      throw error;
    }
  }
);

const examUpdateSlice = createSlice({
  name: "examupdates",
  initialState: {
    updates: [],
    loading: false,
    error: null,
  },
  reducers: {
    // agar aapko local updates ya reset chahiye to add kar sakte ho
    clearExamUpdates: (state) => {
      state.updates = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExamUpdates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExamUpdates.fulfilled, (state, action) => {
        state.updates = action.payload;
        state.loading = false;
      })
      .addCase(fetchExamUpdates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch exam updates";
      });
  },
});

export const { clearExamUpdates } = examUpdateSlice.actions;
export default examUpdateSlice.reducer;
