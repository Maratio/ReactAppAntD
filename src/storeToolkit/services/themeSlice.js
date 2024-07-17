import { createSlice } from "@reduxjs/toolkit";
import { THEME_COLOR_AQUA, THEME_COLOR_ORANGE, THEME_COLOR_WHITE } from "../types";

const themeSlice = createSlice({
  name: "colorTheme",
  initialState: {
    colorTheme: "white"
  },
  reducers: {
    themeChange(state, action) {
      switch (action.payload) {
        case THEME_COLOR_WHITE:
          return { ...state, colorTheme: action.payload };
        case THEME_COLOR_AQUA:
          return { ...state, colorTheme: action.payload };
        case THEME_COLOR_ORANGE:
          return { ...state, colorTheme: action.payload };
        default:
          return state;
      }
    }

  },
},
);

export default themeSlice.reducer;
export const { themeChange } = themeSlice.actions;


