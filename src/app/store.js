import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice"; // My contribution.
import quizzesReducer from "../features/quizzes/quizzesSlice"; // My contribution.
import cardsReducer from "../features/cards/cardsSlice"; // My contribution.

export default configureStore({
  reducer: {
    topics: topicsReducer, // My contribution.
    quizzes: quizzesReducer, // My contribution.
    cards: cardsReducer // My contribution.
  },
});