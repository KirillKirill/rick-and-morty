import React from 'react';
import * as S from './styled';
import ImageBanner from 'assets/banner.svg';

const Banner: React.FC = () => {
  return (
    <S.Container>
      <S.Text>The Rick and Morty</S.Text>
      <S.ImageContainer>
        {/*<S.Image />*/}
        <ImageBanner />
      </S.ImageContainer>
    </S.Container>
  );
};

export default Banner;
