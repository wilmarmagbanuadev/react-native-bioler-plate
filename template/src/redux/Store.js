import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice';

export const Store = configureStore({
  reducer: {
    appData: CounterSlice
  },
})
