import React from 'react';
import * as S from './styled';
import Banner from 'components/Banner';
import Characters from 'components/Characters';

const Main: React.FC = () => {
  return (
    <S.Container>
      <Banner />
      <Characters />
    </S.Container>
  );
};

export default Main;
