import * as React from 'react';

import './Party.scss';
import { Results } from 'store/results/types';
import { findParty } from 'utils/partyFinder';
import { Party as PartyType } from 'utils/partiesValues';
import { calcSpheresResults } from 'utils/spheresCalculator';
import PartyView from './PartyView';

type Props = {
  results: Results
};

type State = {
  party: PartyType | null
};

class Party extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      party: null,
    };
  }

  componentDidMount() {
    const { results } = this.props;
    const spheresResults = calcSpheresResults(results);
    const party = findParty({
      economics: spheresResults.economics,
      social: spheresResults.social,
    });

    this.setState({
      party,
    });
  }

  render = () => PartyView({
    party: this.state.party,
  })
}

export default Party;
