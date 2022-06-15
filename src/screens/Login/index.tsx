import React from 'react';
import {Alert, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../types/routes';
import auth from '@react-native-firebase/auth';
import {
  BackGround,
  Container,
  Footer,
  FooterButton,
  InputEmail,
  InputPass,
  TitleContainer,
} from './style';
import {Button} from '../../components/Controllers/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Sucesso', 'Usuário logado com sucesso'))
      .catch(() => Alert.alert('Erro', 'Erro no log do usuário'))
      .finally(() => setIsLoading(false));
  };

  return (
    <BackGround>
      <Container>
        <TitleContainer>
          <Text style={{fontSize: 28, color: '#556080'}}>Login de Usuário</Text>
        </TitleContainer>
        <InputEmail placeholder="Informe um email" onChangeText={setEmail} />
        <InputPass
          placeholder="Informe uma senha de 6 caracteres ou mais"
          onChangeText={setPassword}
        />
        <Button title="Entrar" isLoading={isLoading} onPress={handleLogin} />
        <Footer>
          <FooterButton onPress={() => navigation.navigate('Register')}>
            <Icon name="person-add" size={30} color="#556080" />
            <Text style={{color: '#556080'}}>Criar Conta</Text>
          </FooterButton>
          <FooterButton>
            <Icon name="email" size={30} color="#556080" />
            <Text style={{color: '#556080'}}>Esqueci senha</Text>
          </FooterButton>
        </Footer>
      </Container>
    </BackGround>
  );
};

export default Login;
