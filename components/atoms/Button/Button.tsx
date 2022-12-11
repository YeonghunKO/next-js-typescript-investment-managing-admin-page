import type { ButtonType } from '@type/atoms/button';
import React from 'react';
import Icon from '../Icons/Icon';
import * as S from './Button.styles';

const Button = ({ children, onClick, icon, ...props }: ButtonType) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {icon && <Icon icon={icon} size="18" />}
      <span>{children}</span>
    </S.Button>
  );
};

export default Button;
