import * as React from 'react';
import Footer from 'components/Footer';
import Hero from './Hero';
import Info from './Info';
import Stats from './Stats';
import './Home.scss';

const Home: React.FC = () => (
  <main className="home">
    <Hero />
    <Info />
    <Stats />
    <Footer />
  </main>
);

export default Home;
