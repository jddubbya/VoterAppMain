import {configureStore} from '@reduxjs/toolkit';
import voterDataSlice from './slice.cjs';

export default configureStore ({
  reducer: {
    voterData: voterDataSlice
  }
});
