import React from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';

import { mapStateToProps, mapDispatcherToProps } from './ListRedux';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;
type Props = ReduxType;

class ResultsHistory extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onListButtonClick = this.onListButtonClick.bind(this);
  }

  onListButtonClick(id: string | undefined) {
    const { deleteResultsHistoryElement } = this.props;

    if (id !== undefined) {
      deleteResultsHistoryElement(id);
    }
  }

  render = () => ListView({
    resultsHistory: this.props.resultsHistory,
    onListButtonClick: this.onListButtonClick,
    loading: this.props.loading,
  })
}

export default connect(
  mapStateToProps,
  mapDispatcherToProps,
)(ResultsHistory);
