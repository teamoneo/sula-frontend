import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0E2453;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.color};
  font-family: 'comfortaaBold';
  align-self: flex-start;
`;

export const SignInInput = styled.TextInput`
  width: 95%;
  padding: 15px;
  background: #FFFFFF;
  font-size: 18px;
  font-family: 'comfortaaBold';
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const SignInButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const SignInButtonText = styled.Text`
  font-size: 24px;
  font-family: 'comfortaaBold';
  color: #EA2A4F;
`;

export const TextLinkContainer = styled.View`
  flex-direction: column;
  position: absolute;

  bottom: 0;
  align-self: flex-start;
  padding: 30px;
`;

export const LinkText = styled.Text`
  font-size: 18px;
  font-family: 'comfortaaBold';
  color: #EA2A4F;
  text-decoration-line: underline;
  text-decoration-style: solid;
`;
