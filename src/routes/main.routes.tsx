import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Reports from '../screens/Reports';
import NewTransaction from '../screens/NewTransaction';

const {Navigator, Screen} = createStackNavigator();

export const MainRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Reports" component={Reports} />
      <Screen name="NewTransaction" component={NewTransaction} />
    </Navigator>
  );
};
