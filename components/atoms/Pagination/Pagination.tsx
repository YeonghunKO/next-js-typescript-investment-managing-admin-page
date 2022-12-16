import Theme from '@components/particles/Theme';
import type { PaginationType } from '@type/atoms/Pagination';
import React, { useEffect, useState } from 'react';
import Button from '../Button';
import * as S from './Pagination.styles';

const Pagination = ({ totalPage, currentPage, onPage }: PaginationType) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(currentPage);
  // console.log('totalPage in pagination', totalPage);
  // console.log('currentPageNumber in pagination', currentPageNumber);

  const handlePageClick = (pageContent: 'backward' | 'forward' | number) => {
    let parsedPageNumber;

    switch (pageContent) {
      case 'backward':
        parsedPageNumber = currentPageNumber - 2;
        break;
      case 'forward':
        parsedPageNumber = currentPageNumber + 2;
        break;

      default:
        parsedPageNumber = pageContent;
        break;
    }

    setCurrentPageNumber(parsedPageNumber);
    onPage(parsedPageNumber);
  };

  useEffect(() => {
    setCurrentPageNumber(currentPage ? currentPage : 1);
  }, [totalPage, currentPage]);

  const createPages = ({
    totalPageNumber,
    currentPageNumber,
  }: {
    totalPageNumber: number;
    currentPageNumber: number;
  }) => {
    const pagesComponents: JSX.Element[] = [];
    // console.log('totalPageNumber in createPages', totalPageNumber);
    // console.log('currentPageNumber in createPages', currentPageNumber);
    const pushPageComponentsByRange = ({
      from,
      to,
    }: {
      from: number;
      to: number;
    }) => {
      for (let pageNumber = from; pageNumber <= to; pageNumber++) {
        pagesComponents.push(
          <S.PaginationPages
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            isActive={currentPageNumber === pageNumber}
          >
            {pageNumber}
          </S.PaginationPages>
        );
      }
    };

    const pushPageComponentWithDots = (direction: 'forward' | 'backward') => {
      pagesComponents.push(
        <S.PaginationPages
          key={direction}
          onClick={() => handlePageClick(direction)}
        >
          ...
        </S.PaginationPages>
      );
    };

    const pushSingleNumberPageComponent = (number: number) => {
      pagesComponents.push(
        <S.PaginationPages key={number} onClick={() => handlePageClick(number)}>
          {number}
        </S.PaginationPages>
      );
    };

    if (totalPageNumber < 6) {
      pushPageComponentsByRange({ from: 1, to: totalPageNumber });
      return pagesComponents;
    }

    if (currentPageNumber <= 3) {
      pushPageComponentsByRange({ from: 1, to: 4 });
      pushPageComponentWithDots('forward');
      pushSingleNumberPageComponent(totalPageNumber);
      return pagesComponents;
    }

    if (currentPageNumber >= totalPageNumber - 2) {
      pushSingleNumberPageComponent(1);
      pushPageComponentWithDots('backward');
      pushPageComponentsByRange({
        from: totalPageNumber - 3,
        to: totalPageNumber,
      });
      return pagesComponents;
    }

    // currentPageNumber에서 앞뒤로 다 '...' 이 있는 경우
    pushSingleNumberPageComponent(1);
    pushPageComponentWithDots('backward');
    pushPageComponentsByRange({
      from: currentPageNumber - 1,
      to: currentPageNumber + 1,
    });
    pushPageComponentWithDots('forward');
    pushSingleNumberPageComponent(totalPageNumber);
    return pagesComponents;
  };

  return (
    <S.Container>
      {totalPage && totalPage > 1 ? (
        <>
          <Button
            padding="0.5rem"
            width="auto"
            backgroundColor={Theme.secondary}
            textColor={Theme.grey50}
            disabled={currentPageNumber === 1}
            onClick={() => handlePageClick(currentPageNumber - 1)}
          >
            이전페이지
          </Button>
          <S.PaginationContainer>
            {totalPage &&
              createPages({
                totalPageNumber: totalPage as number,
                currentPageNumber,
              })}
          </S.PaginationContainer>
          <Button
            padding="0.5rem"
            width="auto"
            backgroundColor={Theme.secondary}
            textColor={Theme.grey50}
            disabled={currentPageNumber === totalPage}
            onClick={() => handlePageClick(currentPageNumber + 1)}
          >
            다음페이지
          </Button>
        </>
      ) : null}
    </S.Container>
  );
};

export default Pagination;
