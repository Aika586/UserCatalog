import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}
const token = localStorage.getItem("token");
const initialState: AuthState = {
  isAuthenticated: !!token,
  token: token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      state.isAuthenticated = true;
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
