import React from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { View, TouchableOpacity, Text } from 'react-native';

export default function Main(){

  async function logOut() {
    try {
      await AsyncStorage.removeItem('auth');
      console.log(await AsyncStorage.getItem('auth'));
    }
    catch(exception) {
      return false;
    }
  }

  return(
    <View>
      <Text>Main page</Text>
      <TouchableOpacity style={{ backgroundColor: '#1231', padding: 10 }} onPress={async () => await logOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}