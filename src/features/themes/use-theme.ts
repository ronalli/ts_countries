import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Theme, setTheme } from './themeSlice';
import { selectTheme } from './themeSelectors';

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};
