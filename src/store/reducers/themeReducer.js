import { THEME_COLOR_AQUA, THEME_COLOR_ORANGE, THEME_COLOR_WHITE } from "../types/types";

const initialState = {
    colorTheme: "white"
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
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
