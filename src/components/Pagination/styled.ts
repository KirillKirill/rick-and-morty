import styled from 'styled-components';

type Props = {
  isActive?: boolean;
};

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  overflow: hidden;

  & > li {
    border-right: 1px solid #ced4da;
  }

  & > li:last-child {
    border-right: none;
  }
`;

export const ButtonContainer = styled.li<Props>`
  display: flex;
  background-color: ${({ isActive }) => (isActive ? '#ced4da' : '#e5e5e5')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#000000')};
`;

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: inherit;
`;
