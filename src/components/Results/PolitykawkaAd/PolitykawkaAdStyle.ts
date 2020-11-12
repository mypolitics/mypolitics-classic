import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: var(--gray-2);
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 1.5rem;
  
  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--blue-3);
  text-align: center;
  margin: 0 0 1.5rem;
  
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 2rem;
  }
`;

export const Image = styled.img`
  filter: drop-shadow(0px 0px 32px rgba(0, 75, 91, 0.1));
  height: 6rem;
  width: 6rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  
  @media only screen and (min-width: 768px) {
    height: 8rem;
    width: 8rem;
  }
`;

export const ImagesWrapper = styled.div`
  text-align: center;
  margin-right: -1rem;
  margin-bottom: -0.5rem;
  
  a {
    margin-bottom: 0.5rem;
  
    &:hover img {
      transform: scale(1.1);
    }
  }
  
  a:not(:last-child) {
    margin-right: 1rem;
  }
  
  @media only screen and (min-width: 768px) {
    margin-right: -1.5rem;
    margin-bottom: -1rem;
    
    a:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;

export const LinkWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  background: #F2C94C;
  transition: 0.2s ease-in-out;
  display: inline-block;
  
  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 1rem;
  }
  
  @media only screen and (min-width: 768px) {
    display: inline;
  }
`;
