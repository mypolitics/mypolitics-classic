import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  padding: 2rem 1rem;
  background: var(--blue-1);
  
  @media only screen and (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const Inner = styled.div``;

export const Title = styled.h1`
  color: #F9FAFB;
  margin: 0;
  font-size: 1.5rem;
  padding-bottom: 2rem;
  line-height: 1.2;
  
  @media only screen and (min-width: 768px) {
    font-size: 2em;
  }

  span {
    color: #F2C94C;
  }
`;
