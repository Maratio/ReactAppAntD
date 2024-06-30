const initialState = {
    colorTheme: "white"
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "colorWhite":
            return { ...state, colorTheme: action.payload };
        case "colorAqua":
            return { ...state, colorTheme: action.payload };
        case "colorOrange":
            return { ...state, colorTheme: action.payload };
        default:
            return state;
    }
}