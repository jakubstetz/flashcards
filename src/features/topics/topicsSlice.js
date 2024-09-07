// This whole file is my contribution.
import { createSlice } from "@reduxjs/toolkit";

// Slice Object
export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {topics: {}},
  reducers: {
    addTopic: (state, {payload: {id, name, icon}}) => {
      state.topics[id] = {id, name, icon, quizIds: []};
    }
  }
});

// Selector
export const selectTopics = state => state.topics.topics;

// Exports from Slice
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;