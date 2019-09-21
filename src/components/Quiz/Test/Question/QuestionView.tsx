import React from 'react';

import LoadingInfo from 'components/LoadingInfo';
import './Question.scss';

type Props = {
  text: string
  loading: boolean
};

const Question: React.FC<Props> = (props) => {
  const { loading, text } = props;

  return (
    <div className="test__question">
      {!loading && text}
      {loading && <LoadingInfo colorHEX="#111" />}
    </div>
  );
};

export default Question;
