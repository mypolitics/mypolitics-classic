import styled from 'styled-components';

export const Container = styled.main`
  margin: 80px auto auto;
  max-width: 1200px;
  padding: 1rem;
`;

export const Title = styled.h2`
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #00b4db, #0083b0);
  background: linear-gradient(to right, #00b4db, #0083b0);
  padding: 1rem;
  font-weight: 600;
  border: 0;
  border-radius: 0.5rem;
  color: #fafafa;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  margin-top: 0;
  
  svg {
    margin-left: 0.5em;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  background: #F8F8F8;
  border-radius: 0.5rem;
  padding: 1rem;  
`;

export const SectionTitle = styled.h3`
  color: #00b4db;
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span:last-child {
    cursor: pointer;
  }
  
  &:not(:last-child) {
    padding-bottom: 1em;
  }
`;
