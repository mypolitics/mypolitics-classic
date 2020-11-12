import * as React from 'react';
import AppView from './AppView';

class App extends React.Component<any> {
  componentDidMount() {
    const url = window.location.href;

    if (url.includes('#/results/')) {
      const resultsId = url.split('#/results/')[1];

      window.location.hash = '';
      window.location.pathname = `/results/${resultsId}`;
    }
  }

  render() {
    return <AppView />;
  }
}

export default App;
