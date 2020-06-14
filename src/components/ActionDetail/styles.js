import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${(props) => props.isClicked ? (props.color ? '#2E6A9D' : '#F1554C') : '#E9ECF5' };
  border-radius: 15px;
  padding: 15px 5px;
  align-items: center;
  justify-content: space-between;
`;

export const ActionText = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const ActionNumber = styled.Text`
  font-size: 28px;
  font-family: 'comfortaaBold';
  color: ${(props) => props.isClicked ? '#FFFFFF' : props.color ? '#2E6A9D' : '#F1554C' };
`;

export const ActionTextFixed = styled.Text`
  font-size: 12px;
  font-family: 'comfortaaRegular';
  color: ${(props) => props.isClicked ? '#FFFFFF' : props.color ? '#2E6A9D' : '#F1554C' };
`;
