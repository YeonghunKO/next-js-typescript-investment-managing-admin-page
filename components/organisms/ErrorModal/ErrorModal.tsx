import Button from '@components/atoms/Button';
import { COLOR_VARIANTS } from '@constants/arguments';
import useUnmountIfClickedOutside from '@hooks/useUnmountIfClickOutSide';
import type { ErrorModalType } from '@type/organisms/errorModal';
import React, { useRef } from 'react';
import * as S from './ErrorModal.styles';

const ErrorModal = ({ errorMessage, setErrorMessage }: ErrorModalType) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    setErrorMessage('');
  };

  useUnmountIfClickedOutside(modalRef, handleCloseModal);
  return (
    <S.ViewPortContainer>
      <S.ModalContainer ref={modalRef}>
        <S.Container>
          <S.ErrorText>{errorMessage}</S.ErrorText>
          <Button variant={COLOR_VARIANTS.SECONDARY}>확인</Button>
        </S.Container>
      </S.ModalContainer>
    </S.ViewPortContainer>
  );
};

export default ErrorModal;
