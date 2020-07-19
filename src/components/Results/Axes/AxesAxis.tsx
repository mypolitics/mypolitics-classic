import * as React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { AxisSide, Sides, Widths } from 'utils/axesConfig';

type Props = {
  config: Sides
  widths: Widths
  editable?: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
};

type ShowPopover = 'none' | 'left' | 'right';

const Axis: React.FC<Props> = (props) => {
  const [showPopover, setShowPopover] = React.useState<ShowPopover>('none');
  const { config, widths, editable, onChange } = props;
  const { left } = config;
  const { right } = config;
  const isLeftFontAwesome = left.iconType === 'font-awesome';
  const isRightFontAwesome = right.iconType === 'font-awesome';

  const handlePopoverToggle = (type: ShowPopover): void => {
    if (showPopover === type) {
      setShowPopover('none');
    } else {
      setShowPopover(type);
    }
  };

  const handleLeftIconClick = () => handlePopoverToggle('left');
  const handlRightIconClick = () => handlePopoverToggle('right');

  const popoverLeft = (
    <AxisPopover
      isRight={showPopover === 'right'}
      show={showPopover === 'left'}
      side={left}
    />
  );

  const popoverRight = (
    <AxisPopover
      isRight={showPopover === 'right'}
      show={showPopover === 'right'}
      side={right}
    />
  );

  return (
    <div className="axis">
      {popoverLeft}
      {popoverRight}
      <div
        className={`axis__icon left ${!isLeftFontAwesome ? 'big' : ''}`}
        style={{ background: left.iconColor }}
        onClick={handleLeftIconClick}
        role="button"
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
          {!editable && widths.left > 20 && (
            `${widths.left}%`
          )}
          {editable && (
            <div className="inputwrapper">
              <input
                name={left.title}
                value={widths.left}
                onChange={onChange}
                type="number"
                min={0}
                max={100 - widths.right}
              />
              <span>
                %
              </span>
            </div>
          )}
        </div>
        <div
          className="axis__bar axis__bar--grey"
          style={{
            width: `${widths.center + 1}%`,
          }}
        >
          {widths.center > 20 && (
            `${widths.center}%`
          )}

        </div>
        <div
          className="axis__bar"
          style={{
            background: right.barColor,
            width: `${widths.right}%`,
          }}
        >
          {!editable && widths.right > 20 && `${widths.right}%`}
          {editable && (
            <div className="inputwrapper">
              <input
                name={right.title}
                value={widths.right}
                onChange={onChange}
                type="number"
                min={0}
                max={100 - widths.left}
              />
              <span>
                %
              </span>
            </div>
          )}
        </div>
      </div>
      <div
        className={`axis__icon right ${!isRightFontAwesome ? 'big' : ''}`}
        style={{ background: right.iconColor }}
        onClick={handlRightIconClick}
        role="button"
      >
        {isRightFontAwesome && <FaIcon icon={right.icon} />}
        {!isRightFontAwesome && right.icon}
      </div>
    </div>
  );
};

type PopoverProps = {
  side: AxisSide
  isRight: boolean
  show: boolean
}

const AxisPopover: React.FC<PopoverProps> = ({ side, show, isRight }: PopoverProps) => {
  const meta = side.meta['pl-PL'];

  if (!show) return null;

  return (
    <div className={`axis__popover ${isRight ? 'right' : 'left'}`}>
      <div
        className="axis__popover__title"
        style={{ background: side.barColor }}
      >
        {meta.title}
      </div>
      <div
        className="axis__popover__description"
        style={{ background: side.iconColor }}
      >
        {meta.description}
      </div>
    </div>
  );
};

export default Axis;
