import * as React from 'react';

export type Props = {
  disable: boolean
  text: string
  color: string
  strength?: number
  pushAnswerAndGetNextQuestion?: Function
};

const AnswerView: React.FC<Props> = (props) => {
  const {
    text, color, disable, pushAnswerAndGetNextQuestion,
  } = props;

  return (
    <button
      disabled={disable}
      type="button"
      onClick={() => (pushAnswerAndGetNextQuestion ? pushAnswerAndGetNextQuestion() : null)}
      className={`test__answer test__answer--${color}`}
    >
      {text}
    </button>
  );
};

export default AnswerView;
