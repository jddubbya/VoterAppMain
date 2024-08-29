import {configureStore} from '@reduxjs/toolkit';
import voterDataSlice from './slice.cjs';
import authSlice from './authSlice.cjs';

export default configureStore ({
  reducer: {
    voterData: voterDataSlice,
    authorization: authSlice
  }
});