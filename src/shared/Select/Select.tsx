import React, { ChangeEvent } from 'react';
import { Container } from './SelectStyle';

interface Props {
  name?: string
  defaultValue?: any
  value?: any
  onChange?(e: ChangeEvent<HTMLSelectElement>): void;
  children: React.ReactNode;
}

const Select: React.FC<Props> = ({ children, ...props }) => (
  <Container {...props}>
    {children}
  </Container>
);

export default Select;
