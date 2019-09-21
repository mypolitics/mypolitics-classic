import * as React from 'react';

import './ResultsHistory.scss';
import Form from './Form';
import List from './List';

const ResultsHistoryView: React.FC = () => (
  <main className="history">
    <h1 className="history__title">Historia</h1>
    <List />
    <Form />
  </main>
);

export default ResultsHistoryView;
