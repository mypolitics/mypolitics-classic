import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CompassContainer = styled.div`
  position: relative;
  min-height: 15rem;
  min-width: 15rem;
  
  @media only screen and (min-width: 768px) {
    min-height: 20rem;
    min-width: 20rem;
  }
`;

export const CompassImage = styled.img`
  display: block;
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  min-height: 15rem;
  min-width: 15rem;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  margin: 0.5rem 0;
  border: 0;
`;

export const CompassPoint = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background: #e74c3c;
  border: 2px solid #333;
  position: absolute;
  top: calc(50% - 0.5rem - 4px);
  left: calc(50% - 0.5rem - 2px);
  z-index: 1;
`;

export const CompassDistribution = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  top: -100%;
  left: 0;
  position: relative;
`;
