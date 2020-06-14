import React, { useState } from 'react';

import { Container, Content, Content1, ContentText1, ContentText2 } from './styles';

export default function Switch({ color, func1, func2 }) {

  return (
    <Container color={color} >
      <Content onPress={func1} color={color}>
        <ContentText1 color={color}>Positivas</ContentText1>
      </Content>
      <Content1 onPress={func2} color={color}>
        <ContentText2 color={color}>Negativas</ContentText2>
      </Content1>
    </Container>
  );
}
