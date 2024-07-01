
const initialState = {
  photos: [],
};
export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PHOTO":
      return { ...state, photos: action.payload };

    case "DELETE_PHOTO":
      return {
        ...state,
        photos: state.photos.filter((e) => e.id !== action.payload),
      };

    default:
      return state;
  }
};
