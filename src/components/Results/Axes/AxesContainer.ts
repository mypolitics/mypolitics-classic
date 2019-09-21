import React from 'react';

import './Axes.scss';
import { Sides, Widths } from 'utils/axesConfig';
import AxesView from './AxesView';

type Props = {
  results: any
};

class Axes extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.getBuiltWidths = this.getBuiltWidths.bind(this);
  }

  getBuiltWidths(sides: Sides): Widths {
    const { results } = this.props;

    const leftValue = results.axes[sides.left.title];
    const rightValue = results.axes[sides.right.title];
    const centerValue = 100 - (leftValue + rightValue);

    return {
      left: leftValue,
      right: rightValue,
      center: centerValue,
    };
  }

  render = () => AxesView({
    getBuiltWidths: this.getBuiltWidths,
  })
}

export default Axes;
