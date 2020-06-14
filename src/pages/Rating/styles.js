import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #E9ECF5;
  padding: 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background: ${(props) => props.color ? '#EA2A4F' : '#2E6A9D'};
  padding: 8px;
  border-radius: 50px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-family: 'comfortaaBold';
  color: #000;
  padding: 15px 0 20px;
`;

export const RatingList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const PopupHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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

export const PopUpRatingInfoTitleText = styled.Text`
  color: #000000;
  font-family: 'comfortaaBold';
  padding: 15px 0;
  font-size: 24px;
`;

export const PopUpRatingInfoDescriptionText = styled.Text`
  color: #5C5C5C;
  font-family: 'comfortaaRegular';
  font-size: 16px;
`;

export const PopUpNewRatingTitle = styled.Text`
  color: #000000;
  font-family: 'comfortaaBold';
  font-size: 24px;
`;

export const FormInput = styled.TextInput`
  padding: 15px;
  background: #E9ECF5;
  font-size: 18px;
  font-family: 'comfortaaBold';
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const SendRatingButton = styled.TouchableOpacity`
  width: 100%;
  background: ${(props) => props.color ? '#2E6A9D' : '#F1554C'};
  border-radius: 20px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  padding: 18px 0;
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'comfortaaBold';
`;
