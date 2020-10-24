import React from 'react';
import * as S from './styled';
import { ReactComponent as ImageBanner } from 'assets/banner.svg';

const Banner: React.FC = () => {
  return (
    <S.Container>
      <S.Text>The Rick and Morty</S.Text>
      <S.ImageContainer>
        <ImageBanner fill={'#f5f5f5'} />
      </S.ImageContainer>
    </S.Container>
  );
};

export default Banner;
