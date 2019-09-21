import React from 'react';

import './Ideology.scss';
import findIdeology from 'utils/ideologyFinder';
import { Results } from 'store/results/types';
import IdeologyView, { Props as State } from './IdeologyView';

interface Props {
  results: Results;
}

class Ideology extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ideology: 'Liczenie...',
    };
  }

  async componentDidMount(): Promise<void> {
    const { results } = this.props;
    const ideologyData = findIdeology(results);

    this.setState({
      ideology: ideologyData.name,
    });
  }

  render = () => IdeologyView({
    ideology: this.state.ideology,
  })
}

export default Ideology;
