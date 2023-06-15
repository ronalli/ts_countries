import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoMoonOutline, IoMoon } from 'react-icons/io5';

import { Container } from '../Container';

const Title = styled(Link)`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title to='/'>Where is the world?</Title>
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
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
