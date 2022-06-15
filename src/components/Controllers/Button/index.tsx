import * as React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {Container, Load, Title} from './style';

type Props = RectButtonProps & {
  title: string;
  isLoading?: boolean;
};

export const Button = ({title, isLoading = false, ...rest}: Props) => {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
};
