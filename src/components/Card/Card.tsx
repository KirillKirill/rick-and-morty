import React from 'react';
import * as S from './styled';
import { Character } from 'reducers/character';

type Props = {
  card: Character;
};

const Card: React.FC<Props> = ({ card }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={card.image} alt={card.name} />
      </S.ImageContainer>
      <S.DataContainer>
        <S.Name>{card.name}</S.Name>
        <S.Info
          status={card.status}
        >{`${card.status} - ${card.gender} - ${card.species}`}</S.Info>
        <S.InfoLabel>Last known location:</S.InfoLabel>
        <S.LastLocation>{card.location.name}</S.LastLocation>
        <S.InfoLabel>Last episode:</S.InfoLabel>
        <S.LastEpisode>{`${card.lastEpisode?.episode} - ${card.lastEpisode?.name}`}</S.LastEpisode>
      </S.DataContainer>
    </S.Container>
  );
};

export default Card;
