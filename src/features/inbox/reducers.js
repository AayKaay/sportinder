import { createSlice } from "@reduxjs/toolkit";

const name = "inbox";

const initialState = [
  { id: 1, participant: "Aaykay", lastMessageTime: "16:02" },
  { id: 2, participant: "Askari", lastMessageTime: "6:25" },
  { id: 3, participant: "Gulsher", lastMessageTime: "1:36" },
  { id: 4, participant: "GulKhan", lastMessageTime: "11:17" },
];

const x = [];

const reducers = {
  getChats: (state) => {
    return state;
  },
};

const slice = createSlice({ initialState, name, reducers });

export const { getChats } = slice.actions;

export default slice.reducer;
