import React from 'react';

import * as Unicons from '@iconscout/react-native-unicons';

import { Container, ActionNumber, ActionText, ActionTextFixed } from './styles';

export default function ActionDetail({ color, isClicked, likesNumber }) {
  return (

  <Container color={color} isClicked={isClicked}>
    {
      color ? (
        <Unicons.UilThumbsUp size={45} color={isClicked ? '#FFFFFF' : '#2E6A9D' } />
      ) : (
        <Unicons.UilThumbsDown size={45} color={isClicked ? '#FFFFFF' : '#F1554C'} />
      )
    }
    <ActionText>
      <ActionNumber color={color} isClicked={isClicked} >{likesNumber}</ActionNumber>
      <ActionTextFixed color={color} isClicked={isClicked} >concordam</ActionTextFixed>
    </ActionText>
  </Container>


  );
}
