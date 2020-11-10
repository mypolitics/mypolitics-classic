import * as React from 'react';
import { Container, Title, Inner } from './PoliticiansStyle';
import PoliticiansResultsList from '../../PoliticiansResultsList';

const Politicians: React.FC = () => (
  <Container className="home__section">
    <Inner>
      <Title>
        <span>Postacie polityki</span>
        {' '}
        wykonują myPolitics!
      </Title>
      <PoliticiansResultsList />
    </Inner>
  </Container>
);

export default Politicians;
