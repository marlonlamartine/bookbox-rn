import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 80%;
  height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: #556080;
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: white;
`;

export const Load = styled.ActivityIndicator`
  color: white;
`;
