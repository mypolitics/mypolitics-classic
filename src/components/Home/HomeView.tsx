import * as React from 'react';
import Footer from 'components/Footer';
import Hero from './Hero';
import Info from './Info';
import Stats from './Stats';
import Ideologies from './Ideologies';
import './Home.scss';

const Home: React.FC = () => (
  <main className="home">
    <Hero />
    <Info />
    <Ideologies />
    <Stats />
    <Footer />
  </main>
);

export default Home;
