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
          <DetailTitle numberOfLines={1} ellipsizeMode='tail'>{rating.subject}</DetailTitle>
          <DetailText numberOfLines={2} ellipsizeMode='tail'>{rating.body}</DetailText>
        </InfoDetail>
      </InfoContent>
      <ActionDetail color={rating.value} isClicked={rating.isClicked} likesNumber={rating.like_count} />
    </Container>
  );
}
