import React, {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes} from './auth.routes';
import {MainRoutes} from './main.routes';

const Routes = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <MainRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
