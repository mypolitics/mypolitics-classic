import React from 'react';

type Props = {
  value: number | string
  info: string
};

const StatsElement: React.FC<Props> = (props) => {
  const { value, info } = props;
  return (
    <div className="home__stats__el">
      <div className="home__stats__el__value">{value}</div>
      <div className="home__stats__el__info">{info}</div>
    </div>
  );
};

export default StatsElement;
