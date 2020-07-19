import styled from 'styled-components';

export const Container = styled.div`

`;

export const Inner = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  background: #f5f5f5;
  
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const Title = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface InfoContainerProps {
  notFound?: boolean;
}

export const InfoContainer = styled.a<InfoContainerProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    filter: brightness(95%);
  }
  
  ${({ notFound }: InfoContainerProps) => (
    notFound && `
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background: #ECECEC;
      font-weight: 600;
    `
  )}
`;

export const Image = styled.img`
  display: block;
  height: 3.5rem;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  color: #FFF;
`;
