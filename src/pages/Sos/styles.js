import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  flex:1;
  background-color:#0E2453;
  width:100%;
`;

export const Wrap = styled.View`
  align-items:center;
  justify-content: center;
  flex-direction:column;
  width: 100%;
`;

export const NumberLink = styled.TouchableOpacity`
  width:80%;
  margin-top:20px;
`;

export const CardNumbers = styled(LinearGradient)`
  border-radius: 10px; 
  width:100%;
  height: 141px; 
  align-items:center;
  justify-content:center;
`;

export const Title = styled.Text`
  color:#FFFFFF;
  font-size:32px;
  text-align:left;
  padding-left:10%;
  margin-top:62px;
`;

export const SosNumber = styled.Text`
  color:#FFFFFF;
  font-size:32px;
`;
