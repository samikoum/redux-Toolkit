import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user_slice";
import counterSlice from "./counter_slice";
const userStore = configureStore({
  reducer: {
    users: userSlice.reducer,
    counter: counterSlice.reducer,
  },
});
export default userStore;
