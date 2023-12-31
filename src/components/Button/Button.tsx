import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radius);
  color: var(--color-text);
  cursor: pointer;

  border: none;
  display: flex;
  align-items: center;
  gap: 0 0.75rem;
`;
