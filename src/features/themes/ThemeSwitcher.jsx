import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import styled from 'styled-components';
import { useTheme } from './use-theme';

const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

export const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <>
          <IoMoonOutline size='14px' />
          <span style={{ marginLeft: '0.45rem' }}>Dark Theme </span>
        </>
      ) : (
        <>
          <IoMoon size='14px' />
          <span style={{ marginLeft: '0.45rem' }}>Light Theme </span>
        </>
      )}
    </ModeSwitcher>
  );
};
