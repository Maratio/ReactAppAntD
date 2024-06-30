import { BACKEND_URL } from "../../utils/constants";

const initialState = {
  photos: [],
};
const callback = async (dispatch) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/photos`);
    const data = await response.json();
    //   the same
    // fetch(`${BACKEND_URL}/api/photos`)
    //   .then((data) => data.json())
    //   .then((res) =>
    //     dispatch({
    //       type: "FETCH_PHOTO",
    //       payload: res,
    //     })
    //   );

    dispatch({
      type: "FETCH_PHOTO",
      payload: data,
    });
  } catch (error) {
    console.log("Some error");
  }
};
export const fetchPhotosAction = () => callback;

export const deletePhotosAction = (id) => async (dispatch) => {
  try {
    await fetch(`${BACKEND_URL}/api/photos/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: "DELETE_PHOTO",
      payload: id,
    });
  } catch (error) {
    console.log("Some error");
  }
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
