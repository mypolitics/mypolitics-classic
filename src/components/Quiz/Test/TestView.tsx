import * as React from 'react';
import { connect } from 'react-redux';

import './Test.scss';
import Info from './Info';
import Question from './Question';
import Actions from './Actions';
import { mapStateToProps } from './TestRedux';

type ReduxType = ReturnType<typeof mapStateToProps>;
type Props = ReduxType;

const TestView: React.FC<Props> = (props) => {
  const { question, loading } = props;

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

export default connect(mapStateToProps)(TestView);
