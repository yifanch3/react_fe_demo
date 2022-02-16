import { configureStore } from '@reduxjs/toolkit';

import currentModule from './reducers/current_module';


export default configureStore({
  reducer: {
    currentModule,
  },
})