import { createSlice } from "@reduxjs/toolkit";

const cardslice = createSlice({
  name: "cards",
  initialState: {
    Id: -1,
    companyDetail:[]
    
  },
  reducers: {
    OnClickImage(state,action){
      state.Id=action.payload
    },
    SaveDetail(state,action){
      state.companyDetail=action.payload
    }
  },
});

export const { OnClickImage,SaveDetail } =
  cardslice.actions;
export default cardslice.reducer;
