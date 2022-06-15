import {useNavigation} from '@react-navigation/native';
import {Alert, Text} from 'react-native';
import * as React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../types/routes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import {
  BackButton,
  BackGround,
  Container,
  InputEmail,
  InputPass,
  TitleContainer,
} from './style';
import {Button} from '../../components/Controllers/Button';

const Register = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleRegister = async () => {
    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Sucesso', 'Usuário criado com sucesso'))
      .catch(() => Alert.alert('Erro', 'Erro ao criar usuário'))
      .finally(() => setIsLoading(false));
  };

  return (
    <BackGround>
      <Container>
        <TitleContainer>
          <Text style={{fontSize: 28, color: '#556080'}}>
            Crie Novo Usuário
          </Text>
        </TitleContainer>
        <InputEmail placeholder="Informe um email" onChangeText={setEmail} />
        <InputPass
          placeholder="Informe uma senha de 6 caracteres ou mais"
          onChangeText={setPassword}
        />
        <Button
          title="Cadastrar Usuário"
          isLoading={isLoading}
          onPress={handleRegister}
        />
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#556080" />
          <Text style={{color: '#556080'}}>Já possuo cadastro</Text>
        </BackButton>
      </Container>
    </BackGround>
  );
};

export default Register;
