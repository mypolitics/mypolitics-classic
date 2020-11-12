import * as React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero: React.FC = () => (
  <section className="home__section home__hero">
    <img className="home__hero__image" src="/hero.png" alt="hero image" />
    <div className="home__hero__overlay" />
    <div className="home__hero__container">
      <img className="home__hero__title" src="/vectors/logotype.svg" />
      <Link className="home__hero__btn" to="/quiz">
          ROZPOCZNIJ
      </Link>
    </div>
  </section>
);

export default Hero;
