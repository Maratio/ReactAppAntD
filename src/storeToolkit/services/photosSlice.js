import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCard, deleteCard, getCardDetail, getCards } from "../../utils/fetch";
const card = "photos"

export const fetchPhotosAction = createAsyncThunk(
  "photos/fetchPhotosAction",
  async (rejectWithValue) => {
    try {
      return await getCards(card).then((response) => response);
    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);

export const fetchOnePhotoAction = createAsyncThunk(
  "posts/fetchOnePhotoAction",
  async (id, rejectWithValue) => {
    try {
      return await getCardDetail(card, id).then((response) => {
        return response
      });

    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);

export const addPhotosAction = createAsyncThunk(
  "photos/addPhotosAction",
  async ({ Title, Img_url, navigate }, rejectWithValue) => {
    try {
      return await addCard({ Title, Img_url, navigate, card }).then((newPhoto) => newPhoto);
    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);

export const deletePhotosAction = createAsyncThunk(
  "photos/deletePhotosAction",
  async (id, rejectWithValue) => {
    try {
      return await deleteCard(card, id).then((response) => { if (response) return id })
    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    items: [],
    item: {},
    status: "idle",
    error: null,
    isLoading: false,
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotosAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPhotosAction.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(addPhotosAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPhotosAction.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload]
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(deletePhotosAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePhotosAction.fulfilled, (state, action) => {
        state.items = [...state.items.filter((e) => e.id !== action.payload)];
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(fetchOnePhotoAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOnePhotoAction.fulfilled, (state, action) => {
        state.item = action.payload
        state.status = "success";
        state.isLoading = false;
      })
  },
});

export default photoSlice.reducer;

