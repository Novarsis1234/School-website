// src/slice/holidaySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // your API helper

// Async thunk to fetch holidays
export const fetchHolidays = createAsyncThunk(
  "holidays/fetchHolidays",
  async () => {
    try {
      const res = await getRequest("holidays"); // API endpoint: /holidays
      console.log("API response:", res.data);
      return res.data; // payload for fulfilled
    } catch (error) {
      console.error("Failed to fetch holidays:", error);
      throw error;
    }
  }
);

const holidaySlice = createSlice({
  name: "holidays",
  initialState: {
    holidays: [],
    loading: false,
    error: null,
  },
  reducers: {
    // optional local reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.holidays = action.payload;
        state.loading = false;
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch holidays";
      });
  },
});

export default holidaySlice.reducer;
