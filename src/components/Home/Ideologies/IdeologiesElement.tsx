import * as React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { Axis } from 'utils/axesConfig';

type Props = {
  axis: Axis
};

const IdeologiesElement: React.FC<Props> = (props) => {
  const { axis } = props;

  const { sides } = axis;
  const leftMeta = sides.left.meta['pl-PL'];
  const rightMeta = sides.right.meta['pl-PL'];
  const isLeftFontAwesome = sides.left.iconType === 'font-awesome';
  const isRightFontAwesome = sides.right.iconType === 'font-awesome';

  return (
    <div className="home__ideologies__inner">
      <div className="home__ideologies__axis">
        <div
          className={`home__ideologies__axis__icon ${!isLeftFontAwesome ? 'big' : ''}`}
          style={{ background: sides.left.iconColor }}
        >
          {isLeftFontAwesome && <FaIcon icon={sides.left.icon} />}
          {!isLeftFontAwesome && sides.left.icon}
        </div>
        <div
          className="home__ideologies__axis__title"
          style={{ background: sides.left.barColor }}
        >
          {leftMeta.title}
        </div>
        <div
          className="home__ideologies__axis__description"
          style={{ background: sides.left.iconColor }}
        >
          {leftMeta.description}
        </div>
      </div>
      <div className="home__ideologies__axis">
        <div
          className={`home__ideologies__axis__icon ${!isRightFontAwesome ? 'big' : ''}`}
          style={{ background: sides.right.iconColor }}
        >
          {isRightFontAwesome && <FaIcon icon={sides.right.icon} />}
          {!isRightFontAwesome && sides.right.icon}
        </div>
        <div
          className="home__ideologies__axis__title"
          style={{ background: sides.right.barColor }}
        >
          {rightMeta.title}
        </div>
        <div
          className="home__ideologies__axis__description"
          style={{ background: sides.right.iconColor }}
        >
          {rightMeta.description}
        </div>
      </div>
    </div>
  );
};

export default IdeologiesElement;
