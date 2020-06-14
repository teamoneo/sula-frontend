import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  border-radius: 50px;
  background: ${ (props) => props.color ? 'rgba(234, 42, 79, 0.2)' : 'rgba(46, 106, 157, 0.20)' };
`;

export const Content = styled.TouchableOpacity`
  width: 50%;
  padding: 15px 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background: ${ (props) => props.color ? 'transparent' : '#2E6A9D' };
  border-top-right-radius: ${(props) => props.color ? '0' : '50px' };
  border-bottom-right-radius: ${(props) => props.color ? '0' : '50px' };
  elevation: ${(props) => props.color ? '0' : '20' };
`;

export const ContentText1 = styled.Text`
  font-size: 20px;
  font-family: 'comfortaaRegular';
  text-align: center;
  color: ${(props) => props.color ? '#5C5C5C' : '#FFFFFF' };
`;

export const Content1 = styled.TouchableOpacity`
  width: 50%;
  padding: 15px 0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: ${(props) => props.color ? '#EA2A4F' : 'transparent' };
  border-top-left-radius: ${(props) => props.color ? '50px' : '0' };
  border-bottom-left-radius: ${(props) => props.color ? '50px' : '0' };
  elevation: ${(props) => props.color ? '20' : '0' };
`;

export const ContentText2 = styled.Text`
  font-size: 20px;
  font-family: 'comfortaaRegular';
  text-align: center;
  color: ${(props) => props.color ? '#FFFFFF' : '#5C5C5C' };
`;
