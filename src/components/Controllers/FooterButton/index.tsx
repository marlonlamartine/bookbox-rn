import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Container, Title} from './style';

type Props = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof MaterialIcons.getRawGlyphMap;
};

export const FooterButton = ({title, icon, ...rest}: Props) => {
  return (
    <Container {...rest}>
      <MaterialIcons name={icon} size={24} />
      <Title>{title}</Title>
    </Container>
  );
};
