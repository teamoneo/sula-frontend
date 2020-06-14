import React from 'react';

import InfoOwner from '../../components/InfoOwner';

import { 
  Container,
  InfoContent,
  InfoDetail,
  DetailTitle,
  DetailText,
} from './styles';

import ActionDetail from '../../components/ActionDetail';

export default function InfoCard({ detailInfo, rating }) {

  return(
    <Container>
      <InfoContent onPress={detailInfo} >
        <InfoOwner info={rating} />
        <InfoDetail>
          <DetailTitle numberOfLines={1} ellipsizeMode='tail'>{rating.title}</DetailTitle>
          <DetailText numberOfLines={2} ellipsizeMode='tail'>{rating.description}</DetailText>
        </InfoDetail>

        <ActionDetail color={rating.value} isClicked={rating.isClicked} likesNumber={rating.like} />
      </InfoContent>
    </Container>
  );
}
