import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Unicons from '@iconscout/react-native-unicons';

import Rating from '../pages/Rating';
import Profile from '../pages/Profile';
import Map from '../pages/Map';
import Sos from '../pages/Sos';

const Tab = createBottomTabNavigator();

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        swipeEnabled: true,
        keyboardHidesTabBar: true,
        activeTintColor: '#0E2453',
        inactiveTintColor: '#A0A0A2',
        style: {
          height: 65,
          backgroundColor: '#E9ECF5',
          paddingTop: 10,
          paddingBottom: 10,
        },
        labelStyle: {
          fontSize: 12,
        },
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          if (route.name === 'Perfil') {
            return <Unicons.UilHouseUser size={25} color={color} />;
          }
          if (route.name === 'Mapa') {
            return <Unicons.UilMap size={25} color={color} />;
          }
          if (route.name === 'Avaliações') {
            return <Unicons.UilCommentExclamation size={25} color={color} />;
          }

          return <Unicons.UilPhone size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Perfil" component={Profile} />
      <Tab.Screen name="Mapa" component={Map} />
      <Tab.Screen name="Avaliações" component={Rating} />
      <Tab.Screen name="SOS" component={Sos} />
    </Tab.Navigator>
  );
};