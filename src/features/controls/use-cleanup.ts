import { clearControls } from './controlsSlice';
import { useAppDispatch } from 'store';

export const useCleanup = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(clearControls());
};
