import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // your Axios instance

// ===============================
// Fetch all board messages
// ===============================
export const fetchBoardMessages = createAsyncThunk(
  "boardMessages/fetchBoardMessages",
  async () => {
    try {
      const res = await getRequest("boardmassage"); // endpoint: /api/v1/boardmassage
      console.log("BoardMessage API response:", res.data);

      if (res.data && Array.isArray(res.data.data)) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Failed to fetch board messages:", error);
      throw error;
    }
  }
);

// ===============================
// Slice
// ===============================
const boardMessageSlice = createSlice({
  name: "boardMessages",
  initialState: {
    boardMessages: [], // must be array
    loading: false,
    error: null,
  },
  reducers: {
    // optional local reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoardMessages.fulfilled, (state, action) => {
        state.boardMessages = Array.isArray(action.payload) ? action.payload : [];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBoardMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch board messages";
        state.boardMessages = [];
      });
  },
});

export default boardMessageSlice.reducer;
