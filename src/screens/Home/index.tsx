import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import * as React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../types/routes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
//import {FirebaseAuthTypes} from '@react-native-firebase/auth';

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Página Home</Text>
      {user ? (
        <Button onPress={handlesignOut} title="SignOut" />
      ) : (
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Login"
        />
      )}
    </View>
  );
};

export default Home;
