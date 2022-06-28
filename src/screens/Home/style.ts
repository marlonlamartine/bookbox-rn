import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.View`
  height: 200px;
  width: 95%;
  background-color: #556080;
  border-radius: 10px;
`;

export const SignOutSection = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SignOutButton = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: solid white;
`;

export const AmountSection = styled.View`
  height: 120px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TotalSection = styled.View`
  height: 150px;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VerticalLine = styled.View`
  height: 100%;
  width: 1px;
  background-color: white;
`;

export const TodaySection = styled.View`
  height: 150px;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DateSection = styled.View`
  height: 35px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ListSection = styled.View`
  height: 500px;
  width: 100%;
  padding-top: 20px;
  //background-color: red;
`;

export const CreateTransactionButton = styled.TouchableOpacity`
  height: 40px;
  width: 50%;
  background-color: #556080;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
`;
