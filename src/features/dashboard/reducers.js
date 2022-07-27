import { createSlice } from "@reduxjs/toolkit";

const name = "dashboard";

const initialState = [
  { id: 2312, name: "team1" },
  { id: 2313, name: "team2" },
  { id: 2314, name: "team3" },
  { id: 2315, name: "team4" },
  { id: 2316, name: "team5" },
  { id: 2317, name: "team6" },
];

const reducers = {
  getTeams: (state) => {
    return state;
  },
};

const slice = createSlice({ initialState, name, reducers });

export const { getTeams } = slice.actions;

export default slice.reducer;
