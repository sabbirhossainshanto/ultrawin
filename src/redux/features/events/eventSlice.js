import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeBetValues: null,
  showComponent: false,
  price: null,
  stake: null,
  firstOdd: null,
  secondOdd: null,
  thirdOdd: null,
  predictOdd: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setShowComponent: (state, action) => {
      state.showComponent = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setPlaceBetValues: (state, action) => {
      state.placeBetValues = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setStake: (state, action) => {
      state.stake = action.payload;
    },
    setFirstOdd: (state, action) => {
      state.firstOdd = action.payload;
    },
    setSecondOdd: (state, action) => {
      state.secondOdd = action.payload;
    },
    setThirdOdd: (state, action) => {
      state.thirdOdd = action.payload;
    },
    setPredictOdd: (state, action) => {
      state.predictOdd = action.payload;
    },
  },
});

export const {
  setShowComponent,
  setPosition,
  setPlaceBetValues,
  setPrice,
  setStake,
  setFirstOdd,
  setPredictOdd,
  setSecondOdd,
  setThirdOdd,
} = eventSlice.actions;

export default eventSlice.reducer;
