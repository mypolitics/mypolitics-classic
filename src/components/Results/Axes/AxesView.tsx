import * as React from 'react';

import axesConfig from 'utils/axesConfig';
import Axis from './AxesAxis';

type Props = {
    getBuiltWidths: Function
};

const AxesView: React.FC<Props> = (props) => {
  const { getBuiltWidths } = props;
  return (
    <div className="axes">
      {axesConfig.map((axis) => (
        <Axis
          key={axis.index}
          config={axis.sides}
          widths={getBuiltWidths(axis.sides)}
        />
      ))}
    </div>
  );
};

export default AxesView;
