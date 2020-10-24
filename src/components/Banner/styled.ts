import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #ffffff;
  color: #000000;
`;

export const Text = styled.h1`
  margin: 0;
  font-size: 100px;
  z-index: 10;
`;

export const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 378px;
  height: 376px;
`;
