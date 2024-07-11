import {createSlice} from "@reduxjs/toolkit";

export const voterDataSlice = createSlice({
  name: "storedData",
  initialState: {
    voterData: [],
  },
  reducers: {
    setVoterData: (state, action) => {
      state.voterData = action.payload;
    },
  },
});

export const {setVoterData} = voterDataSlice.actions;
export default voterDataSlice.reducer;