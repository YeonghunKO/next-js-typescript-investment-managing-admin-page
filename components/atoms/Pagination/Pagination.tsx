import Theme from '@components/particles/Theme';
import React, { useState } from 'react';
import Button from '../Button';
import Icon from '../Icons/Icon';
import * as S from './Pagination.styles';

const Pagination = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPageNumber, setCurrentTotalPageNumber] = useState(4);
  const handlePageClick = (pageContent: 'backward' | 'forward' | number) => {
    console.log('pageContent', pageContent);
    switch (pageContent) {
      case 'backward':
        setCurrentPageNumber(prevNumber => prevNumber - 2);
        break;
      case 'forward':
        setCurrentPageNumber(prevNumber => prevNumber + 2);
        break;

      default:
        setCurrentPageNumber(pageContent);
        break;
    }
  };

  const createPages = ({
    totalPageNumber,
    currentPageNumber,
  }: {
    totalPageNumber: number;
    currentPageNumber: number;
  }) => {
    const pagesComponents: JSX.Element[] = [];

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
        <S.PaginationPages onClick={() => handlePageClick(direction)}>
          ...
        </S.PaginationPages>
      );
    };

    const pushSingleNumberPageComponent = (number: number) => {
      pagesComponents.push(
        <S.PaginationPages onClick={() => handlePageClick(number)}>
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
        {createPages({ totalPageNumber, currentPageNumber })}
      </S.PaginationContainer>
      <Button
        padding="0.5rem"
        width="auto"
        backgroundColor={Theme.secondary}
        textColor={Theme.grey50}
        disabled={currentPageNumber === totalPageNumber}
        onClick={() => handlePageClick(currentPageNumber + 1)}
      >
        다음페이지
      </Button>
    </S.Container>
  );
};

export default Pagination;

function CreatePagination(totalPages: any, currentPage: any) {
  currentPage = parseInt(currentPage);
  totalPages = parseInt(totalPages);

  /**
   * 대충 이런식으로?
   * <Button>
   * <ul>
   * {Array.from(total).map((num,idx)=><li>{num}</li>)}
   * </ul>
   * <Button>
   */
  let str = '<ul>';
  let active;
  let pageCutLow = currentPage - 1;
  let pageCutHigh = currentPage + 1;

  if (currentPage > 1) {
    str += `
      <li class="page-item previous no">
        <i class="fas fa-chevron-left"></i>
        <a>Previous</a>
      </li>`;
  }

  if (totalPages < 6) {
    for (let p = 1; p <= totalPages; p++) {
      active = currentPage == p ? 'active' : 'no';
      str += `<li class="${active}"><a>${p}</a></li>`;
    }
  } else {
    if (currentPage > 2) {
      str += '<li class="no page-item"><a>1</a></li>';
      if (currentPage > 3) {
        // inline 이벤트가 안먹힌다.. createPagination이 전역에 없어서 그런듯..
        // 결국 addEvent로 구현해야하나? 그래도 한번쯤은 inline으로 해보고 싶었는데...
        str += `
          <li class="out-of-range backward">
            <a>...</a>
          </li>`;
      }
    }

    if (currentPage <= 2) {
      pageCutLow = 1;
      pageCutHigh = 4;
    }

    if (currentPage >= totalPages - 1) {
      pageCutLow = totalPages - 3;
      pageCutHigh = totalPages;
    }

    for (let p = pageCutLow; p <= pageCutHigh; p++) {
      active = currentPage == p ? 'active' : 'no';
      str += `
        <li class="${active}">
          <a>${p}</a>
        </li>`;
    }

    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        str += `
          <li class="out-of-range forward">
            <a>...</a>
          </li>`;
      }
      str += `
        <li class="page-item no">
          <a>${totalPages}</a>
        </li>`;
    }
  }

  if (currentPage < totalPages) {
    str += `
      <li class="page-item next no">
        <a>Next</a>
        <i class="fas fa-chevron-right"></i>
      </li>`;
  }

  str += '</ul>';
  return str;
}
