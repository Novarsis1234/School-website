import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // Your Axios instance

// Fetch all curriculums
export const fetchCurriculums = createAsyncThunk(
  "curriculums/fetchCurriculums",
  async () => {
    const res = await getRequest("curriculums"); // /api/v1/curriculums
    return Array.isArray(res.data.data) ? res.data.data : [];
  }
);

const curriculumSlice = createSlice({
  name: "curriculums",
  initialState: {
    curriculums: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurriculums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurriculums.fulfilled, (state, action) => {
        state.curriculums = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCurriculums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch curriculums";
      });
  },
});

export default curriculumSlice.reducer;
