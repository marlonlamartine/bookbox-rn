import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParams} from '../../types/routes';
import {BackButton, Container} from './style';

const NewTransaction = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#556080" />
      </BackButton>
      <View>
        <Text>Nova Transação</Text>
      </View>
    </Container>
  );
};

export default NewTransaction;
