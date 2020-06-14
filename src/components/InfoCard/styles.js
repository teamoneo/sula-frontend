import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
  background: #fff;
`;

export const InfoContent = styled.TouchableOpacity`
  flex-direction: column;
  max-width: 65%;
`;

export const InfoDetail = styled.View`
  margin-top: 20px;
  flex-direction: column;
`;

export const DetailTitle = styled.Text`
  font-size: 18px;
  font-family: 'comfortaaRegular';
  color: #000000;
`;

export const DetailText = styled.Text`
  font-size: 15px;
  font-family: 'comfortaaRegular';
  color: #A0A0A2;
`;
