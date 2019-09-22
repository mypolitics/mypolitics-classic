import React from 'react';
import { connect } from 'react-redux';

import './Actions.scss';
import { mapDispatcherToProps } from './ActionsRedux';
import ActionsView, { Props as ActionsProps } from './ActionsView';

type ReduxType = ReturnType<typeof mapDispatcherToProps>
type Props = ReduxType & ActionsProps

type State = {
  resetInitialized: boolean
}

class QuizActions extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      resetInitialized: false
    }

    this.clearAnswers = this.clearAnswers.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
  }

  clearAnswers(): void {
    const { clearQuizData } = this.props;
    const { resetInitialized } = this.state;

    if (!resetInitialized) {
      this.setState({
        resetInitialized: true
      })

      setTimeout(() => {
        this.setState({
          resetInitialized: false
        })
      }, 1000)
    } else {
      clearQuizData();
    }
  }

  previousQuestion(): void {
    const { question, getAndSetQuestionByIndex } = this.props;
    const { resetInitialized } = this.state;

    if (!resetInitialized) {
      this.setState({
        resetInitialized: true
      })

      setTimeout(() => {
        this.setState({
          resetInitialized: false
        })
      }, 1000)
    } else {
    }

    getAndSetQuestionByIndex(question.index - 1);
  }

  render = () => ActionsView({
    question: this.props.question,
    loading: this.props.loading,
    resetInitialized: this.state.resetInitialized,
    clearAnswers: this.clearAnswers,
    previousQuestion: this.previousQuestion,
  })
}

export default connect(
  null,
  mapDispatcherToProps,
)(QuizActions);
