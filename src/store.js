import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from 'features/themes/themeSlice';

import * as api from './config';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          clieant: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
