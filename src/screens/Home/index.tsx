//import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import * as React from 'react';
//import {DrawerNavigationProp} from '@react-navigation/drawer';
//import {RootStackParams} from '../../types/routes';

const Home = () => {
  //const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Página Home</Text>
    </View>
  );
};

export default Home;
