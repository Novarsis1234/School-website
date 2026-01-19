// src/slice/academicCalendarSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence";

// ============================
// Fetch all Academic Calendar entries
// ============================
export const fetchAcademicCalendars = createAsyncThunk(
  "academicCalendar/fetchAcademicCalendars",
  async () => {
    try {
      const res = await getRequest("academic-calendar"); // endpoint: /api/v1/academic-calendar
      console.log("Academic Calendar API response:", res.data);
      return res.data?.data || []; // ✅ Return only the array
    } catch (error) {
      console.error("Failed to fetch Academic Calendars:", error);
      throw error;
    }
  }
);

const academicCalendarSlice = createSlice({
  name: "academicCalendar",
  initialState: {
    calendars: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAcademicCalendars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAcademicCalendars.fulfilled, (state, action) => {
        state.calendars = action.payload; // ✅ Array of academic calendar entries
        state.loading = false;
      })
      .addCase(fetchAcademicCalendars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch academic calendars";
      });
  },
});

export default academicCalendarSlice.reducer;
