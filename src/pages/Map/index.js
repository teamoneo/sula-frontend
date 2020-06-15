import React, { useState, useEffect } from 'react';

import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import * as Unicons from '@iconscout/react-native-unicons';

import * as Location from 'expo-location';

import PopUp from '../../components/PopUp';
import InfoOwner from '../../components/InfoOwner';
import Stars from '../../components/Stars';
import ActionDetail from '../../components/ActionDetail';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { InfoContentMap, BestCommentTitle, BestCommentDescription, PopUpContent } from './styles';

export default function Map(){

  const [errorMessage, setErrorMessage] = useState('');
  const [location, setLocation] = useState({});

  const [visiblePopUpMarker, setVisiblePopUpMarker] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

  }, []);

  return(
    <>
    <View style={{ flex: 1 }}>
      {
        location.coords ? (
          <MapView 
            style={{ flex: 1, width: '100%', overflow: 'hidden' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
          <Marker 
            coordinate={{ latitude: -23.313816, longitude: -51.156679}}
            onPress={() => setVisiblePopUpMarker(true)} >
            <View>
              <Unicons.UilMapMarkerMinus size={40} color="#2E6A9D" />
            </View>
          </Marker>
          <Marker 
            coordinate={{ latitude: -23.313049, longitude: -51.154802}}
            onPress={() => setVisiblePopUpMarker(true)} >
            <View>
              <Unicons.UilMapMarkerMinus size={40} color="#2E6A9D" />
            </View>
          </Marker>

          <Marker 
            coordinate={{ latitude: -23.310861, longitude: -51.156510}}
            onPress={() => setVisiblePopUpMarker(true)} >   
            <View>
              <Unicons.UilMapMarkerMinus size={40} color="#2E6A9D" />
            </View>
          </Marker>

          <Marker 
            coordinate={{ latitude: -23.592529,longitude: -46.690168}}
            onPress={() => setVisiblePopUpMarker(true)} >          
            <View>
              <Unicons.UilMapMarkerMinus size={40} color="#2E6A9D" />
            </View>
          </Marker>

          <Marker 
            coordinate={{ latitude: -23.273204, longitude: -51.185871}}
            onPress={() => setVisiblePopUpMarker(true)} >          
            <View>
              <Unicons.UilMapMarkerMinus size={40} color="#2E6A9D" />
            </View>
          </Marker>

        </MapView>
        ) : (
          <ActivityIndicator style={{ alignSelf: "center" }} size="large" color="#0E2453" />
        )
      }
    </View>
    {visiblePopUpMarker && (
        <PopUp>
          <PopUpContent onPress={() => setVisiblePopUpMarker(false)}>
            <InfoContentMap>
              <InfoOwner info={{ author_id: 'João Câmara', value: true, created_at: null }}>
                <Stars total={5} />
              </InfoOwner>
              <BestCommentTitle>Melhor Comentário</BestCommentTitle>
              <BestCommentDescription>Galera, passei aqui no Estrada para Saúde do CCR...</BestCommentDescription>
            </InfoContentMap>
            <ActionDetail  color={true} isClicked={true} likesNumber={82} />
          </PopUpContent>
        </PopUp>
    )}
    </>
  );
}


// <PopUpRating></PopUpRating>