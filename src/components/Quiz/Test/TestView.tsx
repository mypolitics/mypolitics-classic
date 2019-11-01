import * as React from 'react';
import { connect } from 'react-redux';
import { initialState } from 'store/quiz/reducer';

import './Test.scss';
import Info from './Info';
import Question from './Question';
import Actions from './Actions';
import { mapStateToProps, mapDispatcherToProps } from './TestRedux';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;
type Props = ReduxType;

const TestView: React.FC<Props> = (props) => {
  const { question, loading, getAndSetFirstQuestion } = props;

  if (!question || question === initialState.question) {
    getAndSetFirstQuestion().then(() => window.location.reload());
  }

  return (
    <div className="test">
      <div>
        <Info
          category={question.category}
          questionNumber={question.index + 1}
          questionsTotalCount={question.totalCount}
        />
        <Question text={question.text} loading={loading} />
        <Actions question={question} loading={loading} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatcherToProps)(TestView);
