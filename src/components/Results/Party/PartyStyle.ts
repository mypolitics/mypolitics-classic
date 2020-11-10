import styled from 'styled-components';

export const Container = styled.div`

`;

export const Inner = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Title = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  box-sizing: border-box;
  width: 100%;
  background: #f5f5f5;
  display: grid;
  grid-template-columns: 1fr auto;
  
  span {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  
  @media only screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

interface ButtonProps {
  selected: boolean;
  alone?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: 0;
  color: #00b3da;
  background: #ececec;
  transition: 0.2s ease-in-out;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    background: #00b3da;
    color: #f5f5f5;
  }
  
  &:first-child {
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  &:last-child {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  
  ${({ alone, selected }) => alone && `
    border-radius: 0.5rem !important;
    cursor: pointer !important;
    
    &:hover {
      filter: brightness(95%);
      ${!selected && `
        color: #00b3da;
        background: #ececec;
      `}
    }
  `}
  
  ${({ selected }: ButtonProps) => (
    selected && `
      color: #ececec;
      background: #00b3da;
      cursor: unset;
    `
  )};

  @media only screen and (min-width: 500px) {
    font-size: 1rem;

    &:first-child {
      border-radius: 0.5rem 0 0 0.5rem;
    }
  
    &:last-child {
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
`;

interface InfoContainerProps {
  notFound?: boolean;
  list?: boolean;
}

export const InfoContainer = styled.div<InfoContainerProps>`
  grid-template-columns: 6rem calc(100% - 6rem);
  display: grid;
  grid-template-areas:
    "Image Name"
    "Links Links";
  
  & > img {
    grid-area: Image;
    display: block;
    width: 6rem;
    height: 6rem;
  }
  
  @media only screen and (min-width: 768px) {
    grid-template-rows: 50% 50%;
    grid-template-columns: 10rem calc(100% - 10rem);
    grid-template-areas:
      "Image Name"
      "Image Links";
    & > img {
      width: 10rem;
      height: 10rem;
    }
  }
  
  ${({ notFound, list }: InfoContainerProps) => (
    (notFound || list) && `
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #ececec;
      font-weight: 600;
      padding: 1rem;
      
      ${list && `
        overflow-y: scroll;
        max-height: 9rem;
        display: block;
        
        & > div {
          margin-bottom: 0.5rem;
        }
      `}
      
      ${notFound && `
        padding: 3rem 1rem;
        
        @media only screen and (min-width: 768px) {
          padding: 4.5rem 1rem;
          font-size: 1.2rem;
        }
      `}
    `
  )}
`;

export const ListParty = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr 4rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const ListPartyImage = styled.img`
  height: 100%;
  width: 3rem;
  object-fit: cover;
  display: block;
`;

export const ListPartyTitle = styled.div`
  padding: 1rem;
  font-size: 1rem;
  background: #F5F5F5;
  font-weight: 600;
  text-align: center;
  color: #111;
`;

export const ListPartyValue = styled(ListPartyTitle)<{ value: number }>`
  color: #FFF;
  ${({ value }) => {
    switch (true) {
      case (value > 75):
        return 'background: #27AE60;';
      case (value > 50):
        return 'background: #F2994A;';
      default:
        return 'background: #EB5757;';
    }
  }};
`;

export const Name = styled.div`
  background: #ececec;
  font-size: 1rem;
  text-align: center;
  grid-area: Name;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Links = styled.div`
  background: #ececec;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  grid-area: Links;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  a {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 0.5rem;
    color: #00b3da;
    background: #f5f5f5;
    transition: 0.2s ease-in-out;
    
    &:hover {
      background: #00b3da;
      color: #f5f5f5;
    }
  }
`;
