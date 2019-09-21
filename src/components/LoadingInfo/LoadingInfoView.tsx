import * as React from 'react';
import LoadingInfoIcon from './LoadingInfoIcon';
import './LoadingInfo.scss';

type Props = {
  colorHEX: string
};

const LoadingInfo: React.FC<Props> = (props) => {
  const { colorHEX } = props;

  return (
    <span className="loading">
      <LoadingInfoIcon colorHEX={colorHEX} />
      <span className="loading__text">Ładowanie</span>
    </span>
  );
};

export default LoadingInfo;
