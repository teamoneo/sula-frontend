import styled from 'styled-components/native';

export const PopUpRatingInfoCountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  background: ${(props) => props.isClicked ? (props.color ? '#2E6A9D' : '#F1554C') : '#E9ECF5' };
`;

export const PopUpRatingInfoCountText = styled.Text`
  font-size: 18px;
  margin-left: 4px;
  font-family: 'comfortaaBold';
  color: ${(props) => props.isClicked ? '#FFFFFF' : props.color ? '#2E6A9D' : '#F1554C' };
`;

