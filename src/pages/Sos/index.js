import React from 'react';

import { Linking, Text, TouchableOpacity} from 'react-native';

import { Container,CardNumbers,SosNumber,Title ,NumberLink,Wrap} from './styles';

export default function Sos() {
  
  //Dados que serão requisitados da api
  local=[
    {
      id: 0,
      name: 'SOS BR 101',
      tel: '0800 725 1771',
    },
  ];
  //Dados que serão requisitados da api
  padrao=[
    {
      id: 0,
      name: 'Polícia Militar',
      tel: '190',
    },
    {
      id: 1,
      name: 'PRF',
      tel: '191',
    },
    {
      id: 2,
      name: 'SAMU',
      tel: '192',
    },
    {
      id: 3,
      name: 'Bombeiros',
      tel: '193',
    },
  ];

  return(
    <Container>
      <Title>Na sua localização</Title>
      <Wrap>
      {local.map(({ name,tel }, id)=>(
        <NumberLink key={id} onPress={() => Linking.openURL(`tel:${tel}`)}>
          <CardNumbers colors={['#F97C5C','#EA2A4F']} >
              <SosNumber>{name}</SosNumber>
              <SosNumber>({tel})</SosNumber>
          </CardNumbers>
        </NumberLink>
        ))
      }
      </Wrap>
      <Title>Geral</Title>
      <Wrap>
      {padrao.map(({ name,tel }, id)=>(
        <NumberLink key={id} onPress={() => Linking.openURL(`tel:${tel}`)}>
          <CardNumbers colors={['#F97C5C','#EA2A4F']} >
              <SosNumber>{name}</SosNumber>
              <SosNumber>({tel})</SosNumber>
          </CardNumbers>
        </NumberLink>
        ))
      }
      </Wrap>
    </Container>
  );
}
