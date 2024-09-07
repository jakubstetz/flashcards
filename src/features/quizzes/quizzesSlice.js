// This whole file is my contribution.
import { createSlice } from "@reduxjs/toolkit";

// Slice Object
export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {quizzes: {}},
  reducers: {
    addQuiz: (state, {payload}) => {
      state.quizzes[payload.id] = payload;
    }
  }
});

// Selector
export const selectQuizzes = state => state.quizzes.quizzes;

// Exports from Slice
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;