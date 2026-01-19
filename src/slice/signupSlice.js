// src/slice/signupSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest } from "../apis/ApiInstence";

// ✅ Thunk: Send signup form data to backend
export const signupAccount = createAsyncThunk(
  "signup/signupAccount",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await postRequest("account/signup", formData); // API: /api/v1/account/signup
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Signup failed");
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    loading: false,
    success: false,
    error: null,
    data: null,
  },
  reducers: {
    clearSignupStatus: (state) => {
      state.success = false;
      state.error = null;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(signupAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSignupStatus } = signupSlice.actions;
export default signupSlice.reducer;
