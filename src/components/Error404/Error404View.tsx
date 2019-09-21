import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.scss';

const Error404: React.FC = () => (
  <main className="e404">
    <h1 className="e404__title">Błąd 404</h1>
    <img
      className="e404__image"
      src="http://goorsky.pl/wp-content/uploads/2015/01/rys11.jpg"
      alt="Obrazek `PKW Error 404` autorstwa Goorsky.pl"
    />
    <Link className="e404__link" to="/">
        Powróć na stronę główną
    </Link>
  </main>
);

export default Error404;
