import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'react-native';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index.routes';

const client = new ApolloClient({
  uri: 'https://graphql-ccr.herokuapp.com'
});

export default function App() {
  return (
    <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#E9ECF5" />
          <Routes />
        </NavigationContainer>
    </ApolloProvider>
  );
}
