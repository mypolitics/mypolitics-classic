import React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

type Props = {
  value?: string
  icon?: any
  title: string
  color: string
};

const InfoElement: React.FC<Props> = (props) => {
  const { title, color } = props;

  return (
    <div className={`home__info__card home__info__card--${color}`}>
      <div className="home__info__card__value">
        {props.value && props.value}
        {props.icon && <FaIcon icon={props.icon} />}
      </div>
      <div className="home__info__card__title">{title}</div>
    </div>
  );
};

export default InfoElement;
