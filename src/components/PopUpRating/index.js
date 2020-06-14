import React from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { PopUpRatingInfoCountContainer, PopUpRatingInfoCountText } from './styles';

export default function PopUpRating({ color, isClicked, likesNumber }) {
  return (
    <PopUpRatingInfoCountContainer color={color} isClicked={isClicked}>
    {
      color ? (
        <Unicons.UilThumbsUp size={30} color={isClicked ? '#FFFFFF' : '#2E6A9D' } />
      ) : (
        <Unicons.UilThumbsDown size={30} color={isClicked ? '#FFFFFF' : '#F1554C'} />
      )
    }
      <PopUpRatingInfoCountText color={color} isClicked={isClicked}>{likesNumber}</PopUpRatingInfoCountText>
    </PopUpRatingInfoCountContainer>

  );
}
