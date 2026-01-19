// src/slice/signinSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest } from "../apis/ApiInstence";

// ✅ Thunk: Send signin data to backend
export const signinAccount = createAsyncThunk(
  "signin/signinAccount",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await postRequest("account/signin", formData); // API: /api/v1/account/signin
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Signin failed");
    }
  }
);

const signinSlice = createSlice({
  name: "signin",
  initialState: {
    loading: false,
    success: false,
    error: null,
    data: null,
  },
  reducers: {
    clearSigninStatus: (state) => {
      state.success = false;
      state.error = null;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signinAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(signinAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSigninStatus } = signinSlice.actions;
export default signinSlice.reducer;
