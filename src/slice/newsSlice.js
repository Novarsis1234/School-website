import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence";

// Fetch all news items
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async () => {
    try {
      const res = await getRequest("news"); // endpoint: /api/v1/news
      console.log("News API response:", res.data);
      return res.data.data || []; // ✅ Use the 'data' array
    } catch (error) {
      console.error("Failed to fetch news:", error);
      throw error;
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],   // ✅ Ensure it's always an array
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = Array.isArray(action.payload) ? action.payload : [];
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch news";
      });
  },
});

export default newsSlice.reducer;
