// src/slice/blogSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // make sure this works for your API

// Fetch all blogs
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async () => {
    try {
      const res = await getRequest("blogs"); // endpoint: /api/v1/blogs
      console.log("Blogs API response:", res.data);
      // API returns { success: true, data: [...] }
      return res.data.data || []; // only return the array
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      throw error;
    }
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [], // must be array
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload; // action.payload is guaranteed to be an array
        state.loading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch blogs";
      });
  },
});

export default blogSlice.reducer;
