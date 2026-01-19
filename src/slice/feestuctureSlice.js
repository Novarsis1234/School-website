import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis/ApiInstence"; // existing helper

// Async thunk to fetch fee structures
export const fetchFeeStructures = createAsyncThunk(
  "feeStructures/fetchFeeStructures",
  async () => {
    try {
      // Backend route: ensure your helper prepends api/v1
      const res = await getRequest("feestucture");
      console.log("Fee Structures API response:", res.data);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch fee structures:", error);
      throw error;
    }
  }
);

const feeStructureSlice = createSlice({
  name: "feeStructures",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearFeeStructures: (state) => {
      state.list = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeeStructures.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeeStructures.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchFeeStructures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch fee structures";
      });
  },
});

export const { clearFeeStructures } = feeStructureSlice.actions;
export default feeStructureSlice.reducer;
