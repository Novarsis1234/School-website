import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // existing helper

// Async thunk to fetch school notifications
export const fetchSchoolNotifications = createAsyncThunk(
  "schoolNotifications/fetchSchoolNotifications",
  async () => {
    try {
      // Backend route: ensure your helper prepends api/v1
      const res = await getRequest("schoolnotification");
      console.log("School Notifications API response:", res.data);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch school notifications:", error);
      throw error;
    }
  }
);

const schoolNotificationSlice = createSlice({
  name: "schoolNotifications",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearNotifications: (state) => {
      state.list = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchoolNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchoolNotifications.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchSchoolNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch notifications";
      });
  },
});

export const { clearNotifications } = schoolNotificationSlice.actions;
export default schoolNotificationSlice.reducer;
