import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

import { Container } from '../Container/Container';

const Title = styled.a.attrs({
  href: '/',
})``;
const Wrapper = styled.div``;
const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const ModeSwitcher = styled.div``;

const Header = () => {
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
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            <IoMoon /> Light Theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};

export default Header;
