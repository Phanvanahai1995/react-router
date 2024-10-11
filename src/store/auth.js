import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null,
  },
  reducers: {},
});

export default authSlice.reducer;
