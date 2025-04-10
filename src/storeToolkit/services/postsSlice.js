import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCard, deleteCard, getCardDetail, getCards, getCardsSearch } from "../../utils/fetch";
const card = "posts";


export const fetchPostsAction = createAsyncThunk(
  "posts/fetchPostsAction",
  async (rejectWithValue) => {
    try {
      return await getCards(card).then((response) => {
        return response
      });
    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);

export const fetchPostsSearchAction = createAsyncThunk(
  "posts/fetchPostsSearchAction",
  async (query,rejectWithValue) => {
    try {
      return await getCardsSearch(card,query).then((response) => {
        return response
      });
    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);


export const fetchOnePostAction = createAsyncThunk(
  "posts/fetchOnePostAction",
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


export const addPostsAction = createAsyncThunk(
  "posts/addPostsAction",
  async ({ Rating, Title, Img_url, navigate, Description }, rejectWithValue) => {
    try {
      return await addCard({ Rating, Title, Img_url, navigate, Description, card }).then((newPhoto) => newPhoto);
    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);

export const deletePostsAction = createAsyncThunk(
  "posts/deletePostsAction",
  async (id, rejectWithValue) => {
    try {
      return await deleteCard(card, id).then((response) => { if (response) return id })
    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    item: {},
    status: "idle",
    error: null,
    isLoading: false,
  },
  reducers: {
    resetStateItemAction(state) {
      return { ...state, item: {} }
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostsAction.fulfilled, (state, action) => {
        console.log(action.payload);
        
        state.items = action.payload
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(fetchPostsSearchAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostsSearchAction.fulfilled, (state, action) => {
        console.log(action.payload);

        state.items = action.payload
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(addPostsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPostsAction.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload]
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(deletePostsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePostsAction.fulfilled, (state, action) => {
        state.items = [...state.items.filter((e) => e.id !== action.payload)];
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(fetchOnePostAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOnePostAction.fulfilled, (state, action) => {
        state.item = action.payload
        state.status = "success";
        state.isLoading = false;
      })
  },
});

export default postsSlice.reducer;

export const { resetStateItemAction } = postsSlice.actions;


