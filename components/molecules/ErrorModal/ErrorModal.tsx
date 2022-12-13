import Button from '@components/atoms/Button';
import { COLOR_VARIANTS } from '@constants/arguments';
import useUnmountIfClickedOutside from '@hooks/common/useUnmountIfClickOutSide';
import type { ErrorModalType } from '@type/molecules/ErrorModal';
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
          <Button onClick={handleCloseModal} variant={COLOR_VARIANTS.SECONDARY}>
            확인
          </Button>
        </S.Container>
      </S.ModalContainer>
    </S.ViewPortContainer>
  );
};

export default ErrorModal;
