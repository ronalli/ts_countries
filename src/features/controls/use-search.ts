import { useSelector } from 'react-redux';
import {setSearch } from './controlsSlice';
import { useAppDispatch } from 'store';
import { selectSearch } from './controlsSelectors';
import { ChangeEventHandler } from 'react';

type onSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: onSearch  = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
