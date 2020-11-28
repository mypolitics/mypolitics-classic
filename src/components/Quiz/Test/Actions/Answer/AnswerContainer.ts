import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import './Answer.scss';
import { calcResults } from 'utils/resultsCalculator';
import { mapStateToProps, mapDispatcherToProps } from './AnswerRedux';
import AnswerView, { Props as AnswerProps } from './AnswerView';
import calcSpheresResults, { SpheresVariant } from '../../../../../utils/spheresCalculator';
import findIdeology from '../../../../../utils/ideologyFinder';
import findParty from '../../../../../utils/partyFinder';
import findYouthOrg from '../../../../../utils/youthOrgFinder';
import { getQuarterName } from '../../../../../utils/getQuarterName';


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
    ReactPixel.trackCustom('QuizAddAnswer', answer);

    if (nextQuestionIndex === question.totalCount) {
      const results = calcResults(this.props.answers);
      const spheresResults = calcSpheresResults(
        results,
        SpheresVariant.Extended,
      );
      const { economics, social } = spheresResults;
      const quarter: string = getQuarterName(spheresResults);
      const ideology = findIdeology(spheresResults);
      const partyAll = findParty(spheresResults, false);
      const partyParliament = findParty(spheresResults, true);
      const youthOrg = findYouthOrg(spheresResults);
      const resultsId = await addAndSetResults(results);
      await addToResultsHistoryById(resultsId);

      ReactGA.event({
        category: 'Quiz',
        action: 'Finished',
      });

      ReactPixel.trackCustom('QuizAddResults', {
        ...results.axes,
        economics,
        social,
        quarter,
        ideology,
        partyAll: partyAll ? partyAll.name : 'NONE',
        partyParliament: partyParliament ? partyParliament.name : 'NONE',
        youthOrg: youthOrg ? youthOrg.name : 'NONE',
      });

      clearQuizData();
      this.props.history.push(`/results/${resultsId}`);
    } else {
      ReactGA.event({
        category: 'Quiz',
        action: 'Next Question',
        label: nextQuestionIndex.toString(),
      });

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
