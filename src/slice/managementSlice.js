import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // Axios helper

// ===============================
// Fetch all management team members
// ===============================
export const fetchManagementTeam = createAsyncThunk(
  "management/fetchManagementTeam",
  async () => {
    try {
      const res = await getRequest("management"); // endpoint: /api/v1/management
      console.log("Management API response:", res.data);

      // Ensure we always return an array
      if (res.data && Array.isArray(res.data.data)) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Failed to fetch management team:", error);
      throw error;
    }
  }
);

// ===============================
// Slice
// ===============================
const managementSlice = createSlice({
  name: "management",
  initialState: {
    team: [],        // array to hold members
    loading: false,
    error: null,
  },
  reducers: {
    // Optional: local reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchManagementTeam.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchManagementTeam.fulfilled, (state, action) => {
        state.team = Array.isArray(action.payload) ? action.payload : [];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchManagementTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch management team";
        state.team = [];
      });
  },
});

export default managementSlice.reducer;
