import styled from 'styled-components';

interface ContainerProps {
  checkbox?: boolean;
}

export const Container = styled.label<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  
  ${({ checkbox }: ContainerProps) => (
    checkbox && `
      grid-template-columns: auto 3rem;
    `
  )};
`;

export const Label = styled.span`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background: #ececec;
  font-weight: 600;
  text-align: center;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  margin: 0;
  border: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background: #f5f5f5;
  font-weight: 600;
  box-sizing: border-box;
  min-width: 100%;
  max-width: 100%;
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }

  &[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const Checkbox = styled.div`
  background: #00b4db;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    opacity: 0;
    transition: 0.2s ease-in-out;
    color: #FFF;
  }

  ${StyledInput}:checked ~ & svg {
    opacity: 1;
  }
`;

export const StepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  position: absolute;
  top: 50%;
  right: 0;
  padding: 1rem;
  transform: translateY(-50%);
`;

export const Step = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  background: transparent;

  svg {
    color: #00acd0;
    font-size: 1.75rem;
    transition: 0.2s ease-in-out;
    
    &:hover {
      filter: brightness(95%);
    }
  }
`;
