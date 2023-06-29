import { useEffect } from 'react';

import { selectControls } from 'features/controls/controlsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from './countries-slice';

export const useCountries = () => {
  const dispatch = useDispatch();

  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );

  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
