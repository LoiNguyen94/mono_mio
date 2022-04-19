import { combineReducers } from '@reduxjs/toolkit';

import QuantityPickerSlice from './slices/quantityPickerSlice';

const reducers = combineReducers({
  QuantityPickerSlice,
});

export default reducers;
