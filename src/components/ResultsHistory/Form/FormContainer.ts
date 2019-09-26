import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { mapStateToProps, mapDispatcherToProps } from './FormRedux';
import FormView from './FormView';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;
type Props = ReduxType;

type State = {
    resultsId: string
};

class ResultsHistoryForm extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      resultsId: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ resultsId: event.target.value });
  }

  handleSubmit(event: any) {
    const { addResultsById } = this.props;
    const splittedResultsId = this.state.resultsId.split('/');
    const resultsId = splittedResultsId[splittedResultsId.length - 1];

    addResultsById(resultsId);

    ReactGA.event({
      category: 'ResultsHistory',
      action: 'Added'
    });

    this.setState({
      resultsId: '',
    });
    event.preventDefault();
  }

  render = () => FormView({
    loading: this.props.loading,
    resultsId: this.state.resultsId,
    handleSubmit: this.handleSubmit,
    handleChange: this.handleChange,
  })
}

export default connect(
  mapStateToProps,
  mapDispatcherToProps,
)(ResultsHistoryForm);
