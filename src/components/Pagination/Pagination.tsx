import React, { useCallback } from 'react';
import * as S from './styled';

type Props = {
  totalPages: number;
  currentPage: number;
  changePage: (page: number) => void;
};

const PAGE_NEIGHBOURS = 1;
const TOTAL_NUMBERS = 5;
const TOTAL_BUTTONS = 7;
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from: number, to: number, step = 1): number[] => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
  changePage,
}) => {
  const calculatePageNumbers = useCallback(() => {
    if (totalPages > TOTAL_BUTTONS) {
      const startPage = Math.max(2, currentPage - PAGE_NEIGHBOURS);
      const endPage = Math.min(totalPages - 1, currentPage + PAGE_NEIGHBOURS);
      let pages: Array<number | string> = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = TOTAL_NUMBERS - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }, [currentPage, totalPages]);

  const pages = calculatePageNumbers();

  return (
    <S.Container>
      {pages.map((page, idx) => {
        if (page === LEFT_PAGE) {
          return (
            <S.ButtonContainer key={idx}>
              <S.Button onClick={() => changePage(currentPage - 2)}>
                &laquo;
              </S.Button>
            </S.ButtonContainer>
          );
        }

        if (page === RIGHT_PAGE) {
          return (
            <S.ButtonContainer key={idx}>
              <S.Button onClick={() => changePage(currentPage + 2)}>
                &raquo;
              </S.Button>
            </S.ButtonContainer>
          );
        }

        return (
          <S.ButtonContainer key={idx} isActive={currentPage === page}>
            <S.Button onClick={() => changePage(Number(page))}>{page}</S.Button>
          </S.ButtonContainer>
        );
      })}
    </S.Container>
  );
};

export default Pagination;
