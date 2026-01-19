import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence";

// ============================
// Fetch Academic Sections
// ============================
export const fetchAcademicSections = createAsyncThunk(
  "academicSection/fetch",
  async () => {
    const res = await getRequest("academicsection");
    return res.data.data;
  }
);

const academicSectionSlice = createSlice({
  name: "academicSection",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAcademicSections.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAcademicSections.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchAcademicSections.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default academicSectionSlice.reducer;
