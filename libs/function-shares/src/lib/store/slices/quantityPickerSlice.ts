import { createSlice } from '@reduxjs/toolkit';

// export interface QuantityPickerState {
//   quan: number;
// }

// const initialState: QuantityPickerState = { quan: 0 };
const initialState = 0;

const counterSlice = createSlice({
  name: 'AddQuantityPicker',
  initialState,
  reducers: {
    setQuantityPicker(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setQuantityPicker } = counterSlice.actions;

export default counterSlice.reducer;
