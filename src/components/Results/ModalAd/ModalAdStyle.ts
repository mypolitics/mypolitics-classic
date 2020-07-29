import styled from 'styled-components';

interface WrapperProps {
  show: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
  }
  
  ${({ show }: WrapperProps) => (
    !show && `
      display: none;
    `
  )};
`;

export const Container = styled.article`
  display: grid;
  grid-template-columns: 100%;
  background: #FFF;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.5rem;
  max-width: 30rem;
`;

export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3rem;
  background: #00B3DB;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 4rem;
  }
`;

export const TopTitle = styled.header`
  padding: 1rem;
  font-size: 1.1rem;
  color: #FFF;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.1);
  
  @media only screen and (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.25rem;
  }
`;

export const TopButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.2);
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  
  @media only screen and (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.5rem;
  }
`;

export const MiddleContainer = styled.section`
  padding: 1rem;
  background: #00B3DB;
  font-weight: 600;
  color: #FFF;
  line-height: 1.2;
  
  @media only screen and (min-width: 768px) {
    padding: 1.25rem;
  }
`;

export const MiddleTitle = styled.div`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  
  span {
    color: #F2C94C;
  }
  
  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

export const MiddleList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  margin: 0;
  padding: 0;
  
  @media only screen and (min-width: 768px) {
    grid-gap: 0.75rem;
  }
`;

export const MiddleListElement = styled.li`
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.05);
  display: block;
  text-align: center;
  
  span {
    color: #F2C94C;
  }
  
  @media only screen and (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.1rem;
  }
`;

export const BottomContainer = styled.footer`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
`;

interface LinkProps {
  type?: 'facebook' | 'discord';
}

export const Link = styled.a<LinkProps>`
  text-decoration: none;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background: #efc030;
  color: #FFF;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover {
    filter: brightness(95%);
  }

  ${({ type }: LinkProps) => {
    switch (type) {
      case 'facebook':
        return 'background: #1877F2;';
      case 'discord':
        return 'background: #7388D9;';
      default:
        return '';
    }
  }};
  
  @media only screen and (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.1rem;
  }
`;
