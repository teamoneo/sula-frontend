import React from 'react';

import { Background, PopUpContainer, PopUpTitleText } from './styles';

export default function PopUp({ children, center }) {
  return (
    <Background>
      <PopUpContainer center={center}>
        {children}
      </PopUpContainer>
    </Background>
  );
}
