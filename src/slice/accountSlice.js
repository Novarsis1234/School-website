import { createSlice } from "@reduxjs/toolkit";

// ✅ Safely load saved account data from localStorage
let storedAccount = null;
try {
  const data = localStorage.getItem("account");
  if (data && data !== "undefined" && data !== "null") {
    storedAccount = JSON.parse(data);
  }
} catch (error) {
  console.error("❌ Error parsing localStorage account data:", error);
  storedAccount = null;
}

// ✅ Initial State
const initialState = {
  account: storedAccount,
};

// ✅ Slice Definition
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // 🟢 Set Account (on signin or signup)
    setAccount: (state, action) => {
      state.account = action.payload;
      try {
        localStorage.setItem("account", JSON.stringify(action.payload));
      } catch (error) {
        console.error("❌ Error saving account to localStorage:", error);
      }
    },

    // 🔴 Logout Account
    logoutAccount: (state) => {
      state.account = null;
      try {
        localStorage.removeItem("account");
      } catch (error) {
        console.error("❌ Error removing account from localStorage:", error);
      }
    },
  },
});

// ✅ Export Actions and Reducer
export const { setAccount, logoutAccount } = accountSlice.actions;
export default accountSlice.reducer;
