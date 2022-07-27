import { createSlice } from "@reduxjs/toolkit";

const name = "chat";

const initialState = [
  {
    id: 1,
    messages: [
      { sender: "To", message: "Hello", timestamp: 1648 },
      { sender: "From", message: "Hello, Match When.", timestamp: 1649 },
      { sender: "To", message: "you tell", timestamp: 1650 },
    ],
  },
  {
    id: 2,
    messages: [
      { sender: "To", message: "Match Karna hai?", timestamp: 1648 },
      { sender: "To", message: "karna hai ya nahi?", timestamp: 1649 },
      { sender: "To", message: "ok", timestamp: 1650 },
    ],
  },
  {
    id: 3,
    messages: [
      {
        sender: "To",
        message: "Hello. I have a booking from 9-10",
        timestamp: 1648,
      },
      { sender: "To", message: "Do you want to play?", timestamp: 1649 },
      { sender: "From", message: "Yes. Which ground?", timestamp: 1650 },
    ],
  },
  {
    id: 4,
    messages: [
      {
        sender: "From",
        message: "Aoa bro, booking hai aapke paas",
        timestamp: 1648,
      },
      { sender: "To", message: "nahi.", timestamp: 1649 },
      { sender: "To", message: "aapke paas bhi nahi?", timestamp: 1650 },
      {
        sender: "From",
        message: "bhai houti tou aap se tou na puchta na",
        timestamp: 1651,
      },
    ],
  },
];

const reducers = {
  getMessages: (state, { payload }) => {
    return state[payload];
  },
};

const slice = createSlice({ initialState, name, reducers });

export const { getMessages } = slice.actions;

export default slice.reducer;
