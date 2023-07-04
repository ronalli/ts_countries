import { useSelector } from 'react-redux';
import { loadNeighborsByBorder} from './detailsSlice';

import { useEffect } from 'react';
import { selectHeighbors } from './detailsSelecrots';
import { useAppDispatch } from 'store';

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbors = useSelector(selectHeighbors);

  useEffect(() => {
    if (borders.length) dispatch(loadNeighborsByBorder(borders));
  }, [borders, dispatch]);
  return neighbors;
}; 
