// src/slice/uniformSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence";

// Async thunk to fetch all uniforms
export const fetchUniforms = createAsyncThunk(
  "uniforms/fetchUniforms",
  async () => {
    try {
      const res = await getRequest("uniforms"); // backend endpoint: /api/v1/uniforms
      console.log("Uniforms API response:", res.data);

      // ✅ Extract the array from API response
      return res.data.data || [];
    } catch (error) {
      console.error("Failed to fetch uniforms:", error);
      throw error;
    }
  }
);

const uniformSlice = createSlice({
  name: "uniforms",
  initialState: {
    uniforms: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniforms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUniforms.fulfilled, (state, action) => {
        state.uniforms = action.payload; // ✅ only the array
        state.loading = false;
      })
      .addCase(fetchUniforms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch uniforms";
      });
  },
});

export default uniformSlice.reducer;
