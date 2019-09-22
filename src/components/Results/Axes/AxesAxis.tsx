import * as React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { Sides, Widths } from 'utils/axesConfig';

type Props = {
  config: Sides
  widths: Widths
};

const Axis: React.FC<Props> = (props) => {
  const { config, widths } = props;
  const { left } = config;
  const { right } = config;
  const isLeftFontAwesome = left.iconType === 'font-awesome';
  const isRightFontAwesome = right.iconType === 'font-awesome';

  return (
    <div className="axis">
      <div
        className={`axis__icon ${!isLeftFontAwesome ? 'big' : ''}`}
        style={{ background: left.iconColor }}
      >
        {isLeftFontAwesome && <FaIcon icon={left.icon} />}
        {!isLeftFontAwesome && left.icon}
      </div>
      <div className="axis__bars">
        <div
          className="axis__bar"
          style={{
            background: left.barColor,
            width: `${widths.left}%`,
          }}
        >
          {widths.left > 20 && `${widths.left}%`}
        </div>
        <div
          className="axis__bar axis__bar--grey"
          style={{
            width: `${widths.center + 1}%`,
          }}
        >
          {widths.center > 20 && `${widths.center}%`}
        </div>
        <div
          className="axis__bar"
          style={{
            background: right.barColor,
            width: `${widths.right}%`,
          }}
        >
          {widths.right > 20 && `${widths.right}%`}
        </div>
      </div>
      <div
        className={`axis__icon ${!isRightFontAwesome ? 'big' : ''}`}
        style={{ background: right.iconColor }}
      >
        {isRightFontAwesome && <FaIcon icon={right.icon} />}
        {!isRightFontAwesome && right.icon}
      </div>
    </div>
  );
};

export default Axis;
