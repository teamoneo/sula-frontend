import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { ActivityIndicator} from 'react-native';

import * as Unicons from '@iconscout/react-native-unicons';

import PopUpRating from '../../components/PopUpRating';

import { 
  Container, 
  Title, 
  RatingList, 
  Header, 
  Button, 
  PopupHeader,
  PopUpRatingInfoCountContainer,
  PopUpRatingInfoCountText,
  PopUpRatingInfoTitleText,
  PopUpRatingInfoDescriptionText,
  PopUpNewRatingTitle,
  FormInput,
  SendRatingButton,
  ButtonText
} from './styles';

import Switch from '../../components/Switch';
import InfoCard from '../../components/InfoCard';
import PopUp from '../../components/PopUp';
import InfoOwner from '../../components/InfoOwner';

const GET_FEEDBACK = gql`
query getFeedback {
  getFeedback {
    id,
    subject,
    body,
    like_count,
    author_id,
    created_at
  }
}
`;

const GET_USERS = gql`
query getUsers {
  getUsers {
    id,
    name
  }
}
`;

export default function Rating() {

  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState(false);
  const [visiblePopUpRatingInfo, setVisiblePopUpRatingInfo] = useState(false);
  const [visiblePopUpNewRating, setVisiblePopUpNewRating] = useState(false);

  const [titleRating, setTitleRating] = useState('');
  const [description, setDescription] = useState('');

  const [popUpInfo, setPopUpInfo] = useState({});

  const [executeFeedback, feedbackQuery] = useLazyQuery(GET_FEEDBACK);
  const [executeUsers, userQuery] = useLazyQuery(GET_USERS);

  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        comfortaaBold: require('../../../assets/fonts/Comfortaa-Bold.ttf'),
        comfortaaRegular: require('../../../assets/fonts/Comfortaa-Regular.ttf'),
      });

      setLoading(false);
    }
    loadFont();
    executeUsers();
  }, []);

  useEffect(() => {
    if (!users.length == 0) {
      return;
    }

    executeFeedback();
  }, [users]);

  useEffect(() => {
    const {loading, error, data} = userQuery;

    if (loading) {
      return;
    }

    if (error) {
      return;
    }

    if (Object(data).getUsers) {
      setUsers(data.getUsers);
    }

  }, [userQuery]);

  useEffect(() => {
    const {loading, error, data} = feedbackQuery;

    if (loading) {
      return;
    }

    if (error) {
      return;
    }

    if (Object(data).getFeedback) {
      setFeedbacks(data.getFeedback.map(item => {
          const userMatch = users.filter((user) => {
            return (user.id === item.author_id)
          })[0];
          if (userMatch) {
            item.author_id = userMatch.name;
          }
        return item;
      }));
    }
  }, [feedbackQuery]);

  if (loading === true) {
    return (
      <Container style={{ justifyContent: "center", alignItems: "center" }} >
        <ActivityIndicator size="large" color="#0E2453" />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Header>
          <Title>Avaliações</Title>
          <Button onPress={() => {setVisiblePopUpNewRating(true)}} color={color}>
            <Unicons.UilPlus size={30} color="#ffff" />
          </Button>
        </Header>
        <Switch color={color} func1={() => setColor(false)} func2={() => setColor(true)} />
        <RatingList
          data={feedbacks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <InfoCard detailInfo={() => {
              setVisiblePopUpRatingInfo(true);
              setPopUpInfo(item);
            }} rating={item} />
           }
        />
      </Container>

      {visiblePopUpRatingInfo && (
        <PopUp>
          <PopupHeader>
            <InfoOwner info={popUpInfo} small={true} />
            <PopUpRating color={popUpInfo.value} isClicked={popUpInfo.isClicked} likesNumber={popUpInfo.like_count} />
            <Button onPress={() => setVisiblePopUpRatingInfo(false)} color={!popUpInfo.value}>
              <Unicons.UilMultiply size={24} color="#ffff" />
            </Button>
          </PopupHeader>
          <PopUpRatingInfoTitleText>{popUpInfo.subject}</PopUpRatingInfoTitleText>
          <PopUpRatingInfoDescriptionText>{popUpInfo.body}</PopUpRatingInfoDescriptionText>
        </PopUp>
      )}

      {visiblePopUpNewRating && (
        <PopUp>
          <PopupHeader>
            <PopUpNewRatingTitle>Criar avaliação</PopUpNewRatingTitle>
            <Button onPress={() => setVisiblePopUpNewRating(false)} color={color}>
              <Unicons.UilMultiply size={24} color="#ffff" />
            </Button>
          </PopupHeader>
          <PopupHeader style={{ paddingVertical: 20, alignItems: "center" }} >
            <InfoOwner info={{ name: 'João Câmara',  date: new Date(), value: !color }} small={true} />
            <PopUpRatingInfoCountContainer color={color}>
                {
                  color ? (
                    <>
                      <Unicons.UilThumbsDown size={30} color='#F1554C' />
                      <PopUpRatingInfoCountText color={!color}>Negativa</PopUpRatingInfoCountText>
                    </>
                  ) : (
                    <>
                      <Unicons.UilThumbsUp size={30} color='#2E6A9D' />
                      <PopUpRatingInfoCountText color={!color}>Positiva</PopUpRatingInfoCountText>
                    </>
                  )
                }
            </PopUpRatingInfoCountContainer>
          </PopupHeader>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Título"
            placeholderTextColor="#A0A0A2"
            value={description}
            onChangeText={setDescription}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Descrição"
            textAlignVertical="top"
            multiline={true}
            numberOfLines={6}
            placeholderTextColor="#A0A0A2"
            value={titleRating}
            onChangeText={setTitleRating}
          />
          <SendRatingButton color={!color} onPress={{}}>
            <ButtonText>Enviar</ButtonText>
          </SendRatingButton>
        </PopUp>
      )}
    </>
  );
}

