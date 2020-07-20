import React, { ChangeEvent } from 'react';
import { Container, Label, StyledInput, Checkbox, StepContainer, Step } from './InputStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { DeepPartial } from 'redux';

library.add(faCheck, faPlusCircle, faMinusCircle);

interface Props {
  label?: string
  type: string
  name?: string
  defaultValue?: any
  value?: any
  step?: number
  min?: number
  max?: number
  checked?: boolean
  onChange?(e: DeepPartial<ChangeEvent<HTMLInputElement>>): void;
}

const round = (value: number): number => (
  Math.round((value + Number.EPSILON) * 100) / 100
);

const Input: React.FC<Props> = ({ label, onChange, ...props }) => {
  const handleStepUp = () => {
    if (onChange && props.step) {
      const value = round(parseFloat(props.value) + props.step);

      onChange({
        target: {
          name: props.name || '',
          value: value.toString(),
        },
      });
    }
  };

  const handleStepDown = () => {
    if (onChange && props.step) {
      const value = round(parseFloat(props.value) - props.step);

      onChange({
        target: {
          name: props.name || '',
          value: value.toString(),
        },
      });
    }
  };

  return (
    <Container
      checkbox={props.type === 'checkbox'}
    >
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <StyledInput
        onChange={onChange}
        {...props}
      />
      {props.type === 'number' && (
        <StepContainer onClick={(e) => e.preventDefault()}>
          <Step onClick={handleStepUp}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </Step>
          <Step onClick={handleStepDown}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </Step>
        </StepContainer>
      )}
      {props.type === 'checkbox' && (
        <Checkbox>
          <FontAwesomeIcon icon="check" />
        </Checkbox>
      )}
    </Container>
  );
};

export default Input;
