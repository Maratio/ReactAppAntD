import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCardDetail } from "../../utils/fetch";
const card = "comments"


export const fetchOneCommentsAction = createAsyncThunk(
  "comments/fetchOneCommentsAction",
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

const commentsSlice = createSlice({
  name: "comments",
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
      .addCase(fetchOneCommentsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneCommentsAction.fulfilled, (state, action) => {
        state.item = action.payload
        state.status = "success";
        state.isLoading = false;
      })
  },
});

export default commentsSlice.reducer;

