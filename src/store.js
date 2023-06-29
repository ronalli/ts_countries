import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from 'features/themes/themeSlice';

import * as api from './config';
import { controlsReducer } from 'features/controls/controlsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
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
