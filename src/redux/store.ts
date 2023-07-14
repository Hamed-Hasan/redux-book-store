import { configureStore } from '@reduxjs/toolkit';

// Import your slices or reducers here
import counterReducer from './features/counter/counterSlice';
// Import any other slices or reducers you have

// Define your Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add any other slices or reducers here
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
