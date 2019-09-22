import React from 'react';

import './Ideology.scss';
import findIdeology from 'utils/ideologyFinder';
import { SpheresType } from 'utils/spheresCalculator';
import IdeologyView, { Props as State } from './IdeologyView';

interface Props {
  spheresResults: SpheresType;
}

class Ideology extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ideology: 'Liczenie...',
    };
  }

  async componentDidMount(): Promise<void> {
    const { spheresResults } = this.props;
    const ideology = findIdeology(spheresResults);

    this.setState({
      ideology: ideology
    });
  }

  render = () => IdeologyView({
    ideology: this.state.ideology,
  })
}

export default Ideology;
