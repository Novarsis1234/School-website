// src/slice/syllabusSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence";

// ========================================
// Fetch Syllabus API
// ========================================
export const fetchSyllabus = createAsyncThunk(
  "syllabus/fetchSyllabus",
  async () => {
    const res = await getRequest("syllabus"); // GET /syllabus
    console.log("Syllabus API response:", res.data);
    return res.data; // { success: true, data: [...] }
  }
);

// ========================================
// Slice
// ========================================
const syllabusSlice = createSlice({
  name: "syllabus",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearSyllabus: (state) => {
      state.list = [];
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSyllabus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchSyllabus.fulfilled, (state, action) => {
        state.loading = false;

        // IMPORTANT ✔ properly extract API array
        state.list = Array.isArray(action.payload.data)
          ? action.payload.data
          : [];

        console.log("Redux stored syllabus list:", state.list);
      })

      .addCase(fetchSyllabus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch syllabus";
      });
  },
});

export const { clearSyllabus } = syllabusSlice.actions;
export default syllabusSlice.reducer;
