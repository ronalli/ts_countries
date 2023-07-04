import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../Container';
import { ThemeSwitcher } from 'features/themes/ThemeSwitcher';
import { useCleanup } from 'features/controls/use-cleanup';

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

export const Header = () => {
  const cleanUp = useCleanup();

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title to='/' onClick={cleanUp}>
            Where is the world?
          </Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
