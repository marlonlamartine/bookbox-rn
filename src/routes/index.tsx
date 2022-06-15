import React, {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes} from './auth.routes';
import Home from '../screens/Home';

const Routes = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <Home /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
