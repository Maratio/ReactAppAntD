import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./services/postsSlice";
import photoSlice from "./services/photosSlice";
import themeSlice from "./services/themeSlice";
import tripsSlice from "./services/tripsSlice";
import commentsSlice from "./services/commentsSlice";

const store = configureStore({
  reducer: {
    // slices
    posts: postsSlice,
    photos: photoSlice,
    theme: themeSlice,
    routes: tripsSlice,
    comments: commentsSlice

  },
});

export default store;
