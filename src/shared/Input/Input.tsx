import React, { ChangeEvent } from 'react';
import { Container, Label, StyledInput, Checkbox } from './InputStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck);

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
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<Props> = ({ label, onChange, ...props }) => (
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
    {props.type === 'checkbox' && (
      <Checkbox>
        <FontAwesomeIcon icon="check" />
      </Checkbox>
    )}
  </Container>
);

export default Input;
