import styled from 'styled-components/native';

export const InfoHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LetterImage = styled.View`
  width: ${(props) => props.small ? '42px' : '54px'};
  height: ${(props) => props.small ? '42px' : '54px'};
  align-items: center;
  background: ${(props) => props.color ? '#2E6A9D' : '#EA2A4F' };
  border-radius: 16px;
`;

export const LetterImageText = styled.Text`
  font-family: 'comfortaaRegular';
  font-size: ${(props) => props.small ? '22px' : '30px'};
  color: #FFFFFF;
`;

export const OwnerInfo = styled.View`
  flex-direction: column;
  margin-left: ${(props) => props.small ? '6px' : '10px'};
`;

export const OwnerName = styled.Text`
  font-size: ${(props) => props.small ? '12px' : '16px'};
  font-family: 'comfortaaRegular';
  color: #000000;
`;

export const InfoDate = styled.Text`
  font-size: ${(props) => props.small ? '12px' : '16px'};
  font-family: 'comfortaaRegular';
  color: #A0A0A2;
`;

