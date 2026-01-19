// src/slice/topstudentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // your axios helper

// Async thunk to fetch top students
export const fetchTopStudents = createAsyncThunk(
  "topstudents/fetchTopStudents",
  async () => {
    try {
      const res = await getRequest("topstudent"); // backend endpoint
      console.log("TopStudents API response:", res.data);

      // ✅ Ensure we return only data array
      return res.data.data || [];
    } catch (error) {
      console.error("Failed to fetch topstudents:", error);
      throw error;
    }
  }
);

const topstudentSlice = createSlice({
  name: "topstudents",
  initialState: {
    topstudents: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopStudents.fulfilled, (state, action) => {
        state.topstudents = action.payload; // ✅ only array
        state.loading = false;
      })
      .addCase(fetchTopStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch topstudents";
      });
  },
});

export default topstudentSlice.reducer;
