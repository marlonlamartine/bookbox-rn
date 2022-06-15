import styled from 'styled-components/native';

export const BackGround = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const TitleContainer = styled.View`
  display: flex;
  margin-top: 10px;
`;

export const InputEmail = styled.TextInput`
  height: 60px;
  width: 350px;
  background-color: whitesmoke;
  margin: 30px 3px 10px 3px;
  padding: 10px;
  border-radius: 15px;
`;

export const InputPass = styled.TextInput`
  height: 60px;
  width: 350px;
  background-color: whitesmoke;
  margin: 10px 3px 10px 3px;
  padding: 10px;
  border-radius: 15px;
`;

export const SignInButton = styled.TouchableOpacity`
  height: 40px;
  width: 300px;
  background-color: #556080;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 5px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

export const FooterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
