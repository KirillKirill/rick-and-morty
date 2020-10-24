import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'components/Card';
import { RootState } from 'reducers';
import { Character } from 'reducers/character';
import * as S from './styled';
import { startFetching } from 'actions/character';
import Pagination from 'components/Pagination';

const Characters: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.character,
  );
  useEffect(() => {
    dispatch(startFetching(currentPage));
  }, [dispatch, currentPage]);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <S.Container>
      {loading && <S.LoadingBackground />}
      {error && <S.ErrorText>Something went wrong</S.ErrorText>}
      {data.results && (
        <Pagination
          totalPages={data.info?.pages!}
          currentPage={currentPage}
          changePage={changePage}
        />
      )}
      <S.CharactersContainer>
        {data?.results?.map((el: Character) => (
          <Card key={el.id} card={el} />
        ))}
      </S.CharactersContainer>
    </S.Container>
  );
};

export default Characters;
