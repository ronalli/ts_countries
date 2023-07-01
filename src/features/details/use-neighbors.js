import { useDispatch, useSelector } from 'react-redux';
import { loadNeighborsByBorder, selectHeighbors } from './detailsSlice';
import { useEffect } from 'react';

export const useNeighbors = (borders = []) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectHeighbors);

  useEffect(() => {
    if (borders.length) dispatch(loadNeighborsByBorder(borders));
  }, [borders, dispatch]);
  return neighbors;
};
