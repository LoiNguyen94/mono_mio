import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducer';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

// export const initializeStore = () => {
//   return configureStore({
//     reducer: rootReducers,
//   });
// };

export const makeStore: MakeStore<any> = (context: Context) =>
  configureStore({
    reducer: rootReducers,
  });

export const wrapper = createWrapper<any>(makeStore, { debug: true });
