import type { ButtonType } from '@type/atoms/button';
import React from 'react';
import * as S from './Button.styles';

const Button = ({ children, onClick, ...props }: ButtonType) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
