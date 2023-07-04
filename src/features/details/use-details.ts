import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { clearDetails, loadCountryByName} from './detailsSlice';
import {selectDetails } from './detailsSelecrots';
import { useEffect } from 'react';

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
