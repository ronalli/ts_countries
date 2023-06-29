import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from 'features/themes/themeSlice';

import * as api from './config';
import { controlsReducer } from 'features/controls/controlsSlice';
import { countriesReducer } from 'features/countries/countries-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
