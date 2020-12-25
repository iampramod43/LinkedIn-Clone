import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import countryReducer from '../features/countrySlice';
export default configureStore({
  reducer: {
    user: userReducer,
    country: countryReducer,
  },
});
