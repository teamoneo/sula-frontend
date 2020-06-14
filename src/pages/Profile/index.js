import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Text, View, ActivityIndicator } from 'react-native';
import {Container, Card, IconBox, SeeLaws, Title, Line1, ButtonText, TextButtonArea, CardTitle} from './styles';
import InfoCard from '../../components/InfoCard';

import * as Unicons from '@iconscout/react-native-unicons';

export default function Profile() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        comfortaaBold: require('../../../assets/fonts/Comfortaa-Bold.ttf'),
        comfortaaRegular: require('../../../assets/fonts/Comfortaa-Regular.ttf')
      });

      setLoading(false);
    }
    loadFont();
  }, []);

  if (loading === true) {
    return (
      <Container style={{ justifyContent: "center", alignItems: "center" }} >
        <ActivityIndicator size="large" color="#0E2453" />
      </Container>
    );
  }

  return(
    <Container>
      <Title>Perfil</Title>
      <Card>
        <IconBox>
          <CardTitle>L</CardTitle>
        </IconBox>
        <CardTitle>Luiz Henrique</CardTitle>
      </Card>
      <Card>
        <Line1>
          <IconBox>
            <Unicons.UilBooks color="#fff" size={45} />
          </IconBox>
          <CardTitle>Ver Direitos do Caminhoneiro</CardTitle>
        </Line1>
        <SeeLaws>
          <Unicons.UilBookAlt color="#fff" size={45} />
          <TextButtonArea>
            <ButtonText>Em Breve...</ButtonText>
          </TextButtonArea>
        </SeeLaws>
      </Card>
    </Container>
  );
}