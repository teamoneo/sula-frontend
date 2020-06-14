import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

import AsyncStorage from '@react-native-community/async-storage';

import { Alert, ActivityIndicator, StatusBar } from 'react-native';

import * as Unicons from '@iconscout/react-native-unicons';

import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { 
  Container,
  WelcomeText, 
  SignInInput, 
  SignInButton, 
  SignInButtonText, 
  TextLinkContainer, 
  LinkText 
} from './styles';

const GET_AUTH = gql`
query login($input:AuthInput){
  login(input:$input){
    id,
    name
  }
}
`;

export default function SignIn() {

  const [emailText, setEmail] = useState('');
  const [passwordText, setPassword] = useState('');
  const [pendingLogin, setPendingLogin] = useState(false);
  
  const [loadingFont, setLoadingFont] = useState(true);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        comfortaaBold: require('../../../assets/fonts/Comfortaa-Bold.ttf'),
        comfortaaRegular: require('../../../assets/fonts/Comfortaa-Regular.ttf')
      });

      setLoadingFont(false);
    }
    loadFont();
  }, []);

  const [action, { loading, error, data }] = useLazyQuery(GET_AUTH);

  async function handleSubmit() {
    action({
      variables: {
        input: {
          email: emailText,
          password: passwordText,
        }
      }
    });
    
    setPendingLogin(true);
  }

  async function setStorage(name, property) {
    await AsyncStorage.setItem(name, JSON.stringify(property));
  }

  useEffect(() => {

    if (!pendingLogin) {
      return;
    }

    if (loading) {
      return;
    }

    if (error) {
      Alert.alert('Erro no login', 'E-mail ou senha inválidos');
      setPendingLogin(false);
      return;
    }
    if (Object(data).login) {
      if (data.login.name === 'Guilherme Farrel') {
        data.login.name = 'Corno da alvorada'; // Você achou o easter-egg 
      }
      Alert.alert('Sucesso!', `Seu nome é ${data.login.name}`);
      var auth = { signed: true, userId: data.login.id, userName: data.login.name };
      setStorage('auth', auth);
      setPendingLogin(false);
    } else {
      Alert.alert('Erro no login!', 'E-mail ou senha inválidos');
      setPendingLogin(false);
    }
  }, [loading, error, data]);

  if (loadingFont === true) {
    return (
      <Container style={{ justifyContent: "center", alignItems: "center" }} >
        <ActivityIndicator size="large" color="#0E2453" />
      </Container>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#0E2453" barStyle="light-content" />
      <Container>
        <WelcomeText color="#EA2A4F">Bem vindo,</WelcomeText>
        <WelcomeText style={{ marginBottom: 30 }} color="#FFFFFF">
          Faça login para continuar
        </WelcomeText>
        
        <SignInInput
          selectionColor="#EA2A4F"
          placeholder="email"
          placeholderTextColor="#A0A0A2"
          onChangeText={(text) => setEmail(text)}
          value={emailText}
        />

        <SignInInput
          selectionColor="#EA2A4F"
          placeholder="senha"
          placeholderTextColor="#A0A0A2"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={passwordText}
        />

        <SignInButton onPress={() => handleSubmit()}>
          <SignInButtonText>
            {loading ? 'Carregando...' : 'Entrar'}
          </SignInButtonText>
          <Unicons.UilArrowRight color="#EA2A4F" size={30} />
        </SignInButton>

        <TextLinkContainer>
          <LinkText style={{ marginBottom: 15 }} >Criar conta</LinkText>
          <LinkText>Esqueci minha senha</LinkText>
        </TextLinkContainer>
      </Container>
    </>
  );
}
