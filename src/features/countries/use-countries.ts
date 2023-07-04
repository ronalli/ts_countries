import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import {
  loadCountries,
} from './countries-slice';
import { selectCountriesInfo, selectVisibleCountries } from './countriesSelector';
import { RootState, useAppDispatch } from 'store';
import { Country } from 'types';
import { selectControls } from 'features/controls/controlsSelectors';

export const useCountries = (): [Country[], 
	ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();

  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
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
