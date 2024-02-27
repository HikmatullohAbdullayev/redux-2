
import { configureStore } from '@reduxjs/toolkit';
import aaaReduser from './boxReduser';

const store = configureStore({
  reducer: aaaReduser,
});

export default store;




