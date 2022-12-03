import type { ButtonType } from '@type/atoms/button';
import React from 'react';
import ComponentWrapper from './Button.styles';

const Button = ({ children, onClick, ...props }: ButtonType) => {
  return (
    <ComponentWrapper onClick={onClick} {...props}>
      {children}
    </ComponentWrapper>
  );
};

export default Button;
