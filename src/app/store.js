import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";  // My contribution.

export default configureStore({
  reducer: {
    topics: topicsReducer // My contribution.
  },
});
