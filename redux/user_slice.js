import { createSlice } from "@reduxjs/toolkit";
import getUsers from "../data";

const userSlice = createSlice({
  name: "users",
  initialState: { usersArray: getUsers() },
  reducers: {
    setUsersArrayAddUser: (state, action) => {
      state.usersArray = [
        ...state.usersArray,
        { id: Math.random(), username: action.payload },
      ];
    },
    setUsersArrayDeleteUser: (state, action) => {
      let newUsersArray = state.usersArray.filter(
        (user) => user.id !== action.payload.id
      );
      state.usersArray = newUsersArray;
    },
    setUsersArrayUpdateUser: (state, action) => {
      let newUsersArray = state.usersArray.map((user) => {
        return user.id === action.payload.id
          ? { ...user, username: action.payload.editInput }
          : user;
      });
      state.usersArray = newUsersArray;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
