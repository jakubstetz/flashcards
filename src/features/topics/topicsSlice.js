// This whole file is my contribution.
import { createSlice } from "@reduxjs/toolkit";

// Slice Object
export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {topics: {}},
  reducers: {
    addTopic: (state, action) => {
      const {id, name, icon} = action.payload;
      state.topics[id] = {id, name, icon, quizIds: []};
    }
  }
});

// Selector
export const selectTopics = state => state.topics;

// Exports from Slice
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;