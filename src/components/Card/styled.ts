import styled from 'styled-components';

type StatusProps = {
  status: string;
};

export const Container = styled.article`
  display: flex;
  width: 600px;
  height: 220px;
  background: rgb(60, 62, 68);
  border-radius: 10px;
  margin: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
`;

export const ImageContainer = styled.div`
  min-width: 230px;
  max-width: 230px;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: #ffffff;
`;

export const Name = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Info = styled.p<StatusProps>`
  position: relative;
  margin-left: 20px;
  font-size: 16px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ status }) => {
      if (status === 'Alive') return 'green';
      else if (status === 'Dead') return 'red';
      else return 'yellow';
    }};
  }
`;

export const InfoLabel = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #9e9e9e;
`;

export const LastLocation = styled.p`
  font-size: 16px;
`;

export const LastEpisode = styled(LastLocation)``;
