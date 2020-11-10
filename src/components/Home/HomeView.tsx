import * as React from 'react';
import Hero from './Hero';
import Info from './Info';
import Stats from './Stats';
import Politicians from './Politicians';
import './Home.scss';

const Home: React.FC = () => (
  <main className="home">
    <Hero />
    <Info />
    <Politicians/>
    <Stats />
  </main>
);

export default Home;
