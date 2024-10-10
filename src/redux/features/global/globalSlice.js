import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  showLoginModal: false,
  showRegisterModal: false,
  showLeftSidebar: false,
  showRightSidebar: false,
  showForgetModal: false,
};

const globalSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroupType: (state, action) => {
      state.group = action.payload;
    },
    setSiteLogo: (state, action) => {
      state.siteLogo = action.payload;
    },
    setShowRegisterModal: (state, action) => {
      state.showRegisterModal = action.payload;
      state.showLoginModal = false;
    },
    setShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
      state.showRegisterModal = false;
    },
    setShowLeftSidebar: (state, action) => {
      state.showLeftSidebar = action.payload;
    },
    setShowRightSidebar: (state, action) => {
      state.showRightSidebar = action.payload;
    },
    setShowForgetModal: (state, action) => {
      state.showForgetModal = action.payload;
    },
  },
});

export const {
  setGroupType,
  setSiteLogo,
  setShowLoginModal,
  setShowRegisterModal,
  setShowLeftSidebar,
  setShowRightSidebar,
  setShowForgetModal,
} = globalSlice.actions;

export default globalSlice.reducer;
