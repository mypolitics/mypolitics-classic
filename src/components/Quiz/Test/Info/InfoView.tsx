import React from 'react';
import './Info.scss';

type Props = {
  category: string
  questionNumber: number
  questionsTotalCount: number
};

const QuizInfo: React.FC<Props> = (props) => {
  const { category, questionNumber, questionsTotalCount } = props;

  return (
    <div className="test__info">
      <span>{category}</span>
      <span>
        Pytanie
        {' '}
        {questionNumber}
/
        {questionsTotalCount}
      </span>
    </div>
  );
};

export default QuizInfo;
