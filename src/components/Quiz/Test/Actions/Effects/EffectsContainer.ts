import React from 'react';

import './Effects.scss';
import EffectsView, { Props } from './EffectsView';

type State = {
  showList: boolean
};

class QuizEffects extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showList: false,
    };

    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    this.setState((state: State) => ({
      showList: !state.showList,
    }));
  }

  render = () => EffectsView({
    disable: this.props.disable,
    affirmativeAnswerEffects: this.props.affirmativeAnswerEffects,
    negativeAnswerEffects: this.props.negativeAnswerEffects,
    showList: this.state.showList,
    toggleList: this.toggleList,
  })
}

export default QuizEffects;
