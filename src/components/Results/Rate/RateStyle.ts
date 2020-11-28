import styled from 'styled-components';

export const Container = styled.div<{ variant?: 'positive' | 'negative' }>`
  background: var(--gray-1);
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: auto auto auto;
    
  ${({ variant }) => (
    variant && (
      variant === 'positive'
        ? `
          background: rgb(52 218 113 / 0.25);
          color: #34da71;
        `
        : `
          background: rgb(255 56 106 / 0.25);
          color: #ff386a;
        `
    )
  )}
  
  ${({ variant }) => (
    variant && `
      display: flex;
      justify-content: center;
      align-items: center;
    `
  )}
`;

export const ElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

export const Button = styled.button<{ variant: 'positive' | 'negative' }>`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;

  ${({ variant }) => (
    variant === 'positive'
      ? `
         background: rgb(52 218 113 / 0.25);
         color: #34da71; 
        `
      : `
          background: rgb(255 56 106 / 0.25);
          color: #ff386a;
        `
  )}
`;
