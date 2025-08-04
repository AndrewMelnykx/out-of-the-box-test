import { createSlice } from "@reduxjs/toolkit";
import { MediaInitialState } from "@store/types";

const initialState: MediaInitialState = {
  progressValue: 0,
  isMainHeroVisible: false,
};

const MediaSlice = createSlice({
  name: "media-slice",
  initialState: initialState,
  reducers: {
    handleProgressValue: (state, action) => {
      state.progressValue = action.payload;
    },
    handleEntryHeroButton: (state, action) => {
      state.isMainHeroVisible = action.payload;
    },
  },
});

export const { handleProgressValue, handleEntryHeroButton } = MediaSlice.actions;
export default MediaSlice.reducer;
