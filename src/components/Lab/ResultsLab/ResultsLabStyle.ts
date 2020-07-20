import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 100%;
  
  .axes {
    grid-template-columns: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

export const Button = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 0.5rem;
  background: #00b3da;
  color: #f5f5f5;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  
  svg {
    margin-right: 1em;
  }

  &:hover {
    filter: brightness(95%);
  }
`;
