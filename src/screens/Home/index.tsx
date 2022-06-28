import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import * as React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../types/routes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  AmountSection,
  Container,
  CreateTransactionButton,
  DateSection,
  ListSection,
  SignOutButton,
  SignOutSection,
  TodaySection,
  Top,
  TotalSection,
  VerticalLine,
} from './style';

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  const handlesignOut = () => {
    auth().signOut();
  };

  return (
    <Container>
      <Top>
        <SignOutSection>
          <Text style={{color: 'white'}}>Olá, {user?.email}</Text>
          <SignOutButton onPress={handlesignOut}>
            <Text style={{color: 'white'}}>Sair</Text>
          </SignOutButton>
        </SignOutSection>
        <AmountSection>
          <TotalSection>
            <Text style={{color: 'white', fontSize: 20}}>Total</Text>
            <Text style={{color: 'white', fontSize: 24}}>R$ 0,00</Text>
          </TotalSection>
          <VerticalLine />
          <TodaySection>
            <Text style={{color: 'white', fontSize: 20}}>Hoje</Text>
            <Text style={{color: 'white', fontSize: 24}}>R$ 0,00</Text>
          </TodaySection>
        </AmountSection>
      </Top>
      <DateSection>
        <Text style={{color: '#556080'}}>Sábado - 18/06/2022</Text>
      </DateSection>
      <ListSection />
      <CreateTransactionButton
        onPress={() => navigation.navigate('NewTransaction')}>
        <Text style={{color: 'white'}}>Nova Transação</Text>
      </CreateTransactionButton>
    </Container>
  );
};

export default Home;
