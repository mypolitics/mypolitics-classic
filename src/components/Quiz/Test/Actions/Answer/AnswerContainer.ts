import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './Answer.scss';
import { calcResults } from 'utils/resultsCalculator';
import { mapStateToProps, mapDispatcherToProps } from './AnswerRedux';
import AnswerView, { Props as AnswerProps } from './AnswerView';


type ReduxType = ReturnType<typeof mapDispatcherToProps> & ReturnType<typeof mapStateToProps>;
type Props = ReduxType & AnswerProps & RouteComponentProps;

class Answer extends React.Component<Props> {
  constructor(props: any) {
    super(props);

    this.getBuiltAnswer = this.getBuiltAnswer.bind(this);
    this.pushAnswerAndGetNextQuestion = this.pushAnswerAndGetNextQuestion.bind(this);
  }

  getBuiltAnswer() {
    const { question, strength } = this.props;
    let effects = [];
    if (strength && strength > 0 && strength !== 0) {
      effects = question.affirmativeAnswerEffects;
    } else {
      effects = question.negativeAnswerEffects;
    }

    return {
      index: question.index,
      strength: strength || 0,
      effects,
    };
  }

  async pushAnswerAndGetNextQuestion() {
    const {
      addAnswer,
      question,
      getAndSetQuestionByIndex,
      clearQuizData,
      addAndSetResults,
      addToResultsHistoryById,
    } = this.props;
    const nextQuestionIndex = question.index + 1;
    const answer = await this.getBuiltAnswer();

    addAnswer(answer);

    if (nextQuestionIndex === question.totalCount) {
      const results = calcResults(this.props.answers);
      const resultsId = await addAndSetResults(results);
      await addToResultsHistoryById(resultsId);
      clearQuizData();

      this.props.history.push(`/results/${resultsId}`);
    } else {
      getAndSetQuestionByIndex(nextQuestionIndex);
    }
  }

  render = () => AnswerView({
    text: this.props.text,
    color: this.props.color,
    disable: this.props.disable,
    pushAnswerAndGetNextQuestion: this.pushAnswerAndGetNextQuestion,
  })
}

export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(Answer));
