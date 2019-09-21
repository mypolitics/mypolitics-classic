import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Results.scss';
import { mapStateToProps, mapDispatcherToProps } from './ResultsRedux';
import ResultsView from './ResultsView';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;
type MatchProps = RouteComponentProps<{ id: string }>;
type Props = ReduxType & MatchProps;

type State = {
  results: any
};

class Results extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      results: null,
    };

    this.loadFromStore = this.loadFromStore.bind(this);
    this.loadFromDatabase = this.loadFromDatabase.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { resultsHistory } = this.props;
    const resultsSavedInStore = resultsHistory.some((el) => el.id === id);

    if (resultsSavedInStore) {
      this.loadFromStore(id);
    } else {
      this.loadFromDatabase(id);
    }
  }

  loadFromStore(id: string) {
    const { resultsHistory } = this.props;
    const resultsData = resultsHistory.find((results) => results.id === id);

    this.setState({
      results: resultsData
    });
  }

  async loadFromDatabase(id: string) {
    const { getAndSetResultsById } = this.props;
    await getAndSetResultsById(id);
    const { resultsData } = this.props;

    if (resultsData.id !== id) {
      this.props.history.push('/404');
    }

    this.setState({
      results: resultsData
    });
  }

  render = () => ResultsView({
    loading: this.props.loading,
    results: this.state.results,
  })
}

export default withRouter(
  connect(mapStateToProps, mapDispatcherToProps)(Results),
);
