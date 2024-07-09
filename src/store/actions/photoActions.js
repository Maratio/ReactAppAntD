import { addCard, deleteCard, getCards } from "../../utils/fetch";
const card = "photos";


const callback = async (dispatch) => {
  getCards(card).then((data) => {
    dispatch({
      type: "FETCH_PHOTO",
      payload: data,
    })
  });
};
export const fetchPhotosAction = () => callback;

export const deletePhotosAction = (id) => async (dispatch) => {
  deleteCard(card, id).then((response) => {
    if (response) {
      dispatch({
        type: "DELETE_PHOTO",
        payload: id,
      });
    }
  })
};

export const addPhotosAction = ({ Title, Img_url, navigate }) => async (dispatch) => {
  addCard({ Title, Img_url, navigate, card }).then((newPhoto) => {
    console.log(newPhoto);
    if (newPhoto) {
      dispatch({
        type: "ADD_PHOTO",
        payload: newPhoto,
      });
    }
  })
};