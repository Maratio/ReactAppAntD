import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCardDetail, getCards } from "../../utils/fetch";
const card = "routes"

export const fetchTripsAction = createAsyncThunk(
  "routes/fetchTripsAction",
  async (rejectWithValue) => {
    try {
      return await getCards(card).then((response) => response);
    } catch (error) {
      return rejectWithValue({ data: error, flag: 'error' });
    }
  }
);

export const fetchOneTripAction = createAsyncThunk(
  "routes/fetchOneTripAction",
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

const tripsSlice = createSlice({
  name: "routes",
  initialState: {
    items: [],
    item: {},
    status: "idle",
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTripsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTripsAction.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(fetchOneTripAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneTripAction.fulfilled, (state, action) => {
        state.item = action.payload
        state.status = "success";
        state.isLoading = false;
      })
  },
});

export default tripsSlice.reducer;

