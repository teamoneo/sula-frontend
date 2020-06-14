import React from 'react';

import { Container } from './styles';

import * as Unicons from '@iconscout/react-native-unicons';

export default function Stars({ total }) {
  return (
    <Container>
      <Unicons.UilStar size={24} color={total >= 1 ?  '#FFBC55' : '#ddd'} />
      <Unicons.UilStar size={24} color={total >= 2 ?  '#FFBC55' : '#ddd'} />
      <Unicons.UilStar size={24} color={total >= 3 ?  '#FFBC55' : '#ddd'} />
      <Unicons.UilStar size={24} color={total >= 4 ?  '#FFBC55' : '#ddd'} />
      <Unicons.UilStar size={24} color={total == 5 ? '#FFBC55' : '#ddd'}  />
    </Container>
  );
}
