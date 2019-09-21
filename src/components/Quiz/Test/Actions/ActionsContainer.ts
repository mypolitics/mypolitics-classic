import React from 'react';
import { connect } from 'react-redux';

import './Actions.scss';
import { mapDispatcherToProps } from './ActionsRedux';
import ActionsView, { Props as ActionsProps } from './ActionsView';

type ReduxType = ReturnType<typeof mapDispatcherToProps>
type Props = ReduxType & ActionsProps

class QuizActions extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.previousQuestion = this.previousQuestion.bind(this);
  }

  previousQuestion(): void {
    const { question, getAndSetQuestionByIndex } = this.props;
    getAndSetQuestionByIndex(question.index - 1);
  }

  render = () => ActionsView({
    question: this.props.question,
    loading: this.props.loading,
    clearQuizData: this.props.clearQuizData,
    previousQuestion: this.previousQuestion,
  })
}

export default connect(
  null,
  mapDispatcherToProps,
)(QuizActions);
