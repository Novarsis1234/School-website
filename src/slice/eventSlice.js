// src/slice/eventSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // Your Axios instance

// Fetch all events
export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async () => {
    try {
      const res = await getRequest("events"); // endpoint: /api/v1/events
      console.log("Events API response:", res.data);
      return res.data.data || []; // ✅ Only return the data array
    } catch (error) {
      console.error("Failed to fetch events:", error);
      throw error;
    }
  }
);

const eventSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload; // ✅ Now it's guaranteed to be an array
        state.loading = false;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch events";
      });
  },
});

export default eventSlice.reducer;
