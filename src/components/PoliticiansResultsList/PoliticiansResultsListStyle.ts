import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;

  @media only screen and (min-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  
  @media only screen and (min-width: 768px) {
    grid-gap: 1.5rem;
  }
`;

export const ListElement = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ListElementImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 10rem;
`;

export const ListElementTitle = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  color: #F9FAFB;
  background: var(--blue-2);
  
  @media only screen and (min-width: 500px) {
    padding: 1.25rem;
    font-size: 1.25rem;
  }
`;
