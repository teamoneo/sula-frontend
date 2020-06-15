import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Text, View, ActivityIndicator } from 'react-native';
import {Container, Card, IconBox, SeeLaws, Title, Line1, ButtonText, TextButtonArea, EditButton, CardTitle, IconLetter, EditBox} from './styles';
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

      <Card direction="row">
        <Line1>
          <IconBox color="#2E6A9D">
            <IconLetter>L</IconLetter>
          </IconBox>
          <CardTitle>Luiz Henrique</CardTitle>
        </Line1>
        <EditButton color="#E9ECF5">
          <Unicons.UilPen color="#2E6A9D" size={37} />
          <ButtonText style={{fontSize:16,color:"#2E6A9D"}}>Editar</ButtonText>
        </EditButton>
      </Card>

      <Card direction="column">
        <Line1>
          <IconBox color="#FFBC55">
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