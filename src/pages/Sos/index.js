import React from 'react';

import { Linking, Text, TouchableOpacity} from 'react-native';

import { Container,CardNumbers,SosNumber,Title ,NumberLink,Wrap} from './styles';

export default function Sos() {

  return(
    <Container>
      <Title>Na sua localização</Title>
      <Wrap> 
        <NumberLink onPress={() => Linking.openURL('tel:998637118')}>
          <CardNumbers colors={['#F97C5C','#EA2A4F']} >
              <SosNumber>SOS BR 101</SosNumber>
              <SosNumber>(0800 725 1771)</SosNumber>
          </CardNumbers>
        </NumberLink>
        <NumberLink onPress={() => Linking.openURL('tel:998637118')}>
          <CardNumbers colors={['#F97C5C','#EA2A4F']} >
              <SosNumber>SOS BR 101</SosNumber>
              <SosNumber>(0800 725 1771)</SosNumber>
          </CardNumbers>
        </NumberLink>
      </Wrap>
      <Title>Geral</Title>
      <Wrap>
        <NumberLink onPress={() => Linking.openURL('tel:998637118')}>
          <CardNumbers colors={['#F97C5C','#EA2A4F']} >
              <SosNumber>SOS BR 101</SosNumber>
              <SosNumber>(0800 725 1771)</SosNumber>
          </CardNumbers>
        </NumberLink>
        <NumberLink onPress={() => Linking.openURL('tel:998637118')}>
          <CardNumbers colors={['#F97C5C','#EA2A4F']} >
              <SosNumber>SOS BR 101</SosNumber>
              <SosNumber>(0800 725 1771)</SosNumber>
          </CardNumbers>
        </NumberLink>
        <NumberLink onPress={() => Linking.openURL('tel:998637118')}>
          <CardNumbers colors={['#F97C5C','#EA2A4F']} >
              <SosNumber>SOS BR 101</SosNumber>
              <SosNumber>(0800 725 1771)</SosNumber>
          </CardNumbers>
        </NumberLink>
      </Wrap>
    </Container>
  );
}
