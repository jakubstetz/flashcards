// This whole file is my contribution.
import { createSlice } from "@reduxjs/toolkit";

// Slice Object
export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {cards: {}},
  reducers: {
    addCard: (state, {payload}) => {
      state.cards[payload.id] = payload;
    }
  }
});

// Selector
export const selectCard = id => state => state.cards.cards[id];

// Exports from Slice
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;