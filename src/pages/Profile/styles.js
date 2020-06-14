import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#E9ECF5;
  padding: 0 20px;
`;

export const Card = styled.View`
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
  background: #fff;
`;

export const IconBox = styled.View`
  width: 54px;
  height: 54px;
  align-items:center;
  justify-content:center;
  border-radius:15px;
  align-items: center;
  background-color:#FFBC55;
`;

export const SeeLaws = styled.TouchableOpacity`
  background-color:#FFBC55;
  border-radius: 15px;
  width:100%;
  height:60px;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  margin-top:30px;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-family: 'comfortaaBold';
  color: #000;
  padding: 15px 0 20px;
`;

export const Line1 = styled.View`
  align-items:center;
  justify-content:space-between;
  flex-direction:row;
`;

export const ButtonText = styled.Text`
  font-size:22px;
  color: #fff;
`;

export const TextButtonArea = styled.View`
  width:80%;
  padding-left:18%;
`;

export const CardTitle = styled.Text`
  margin-right:10%;
  font-size:14px;
`;