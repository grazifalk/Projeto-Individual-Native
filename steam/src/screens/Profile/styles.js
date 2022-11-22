import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
  flex: 1;
  background-color: #292c33;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const User = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 30px;
  color: #ffffff;
`;

export const Name = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #ffffff;
`;

export const Country = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #ffffff;
`;

export const Level = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 32px;
  color: #ffffff;
`;

export const Service = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
`;

export const ViewButton = styled.View`

`;

export const EditButton = styled.TouchableOpacity`
  width: 192px;
  height: 42px;
  background: #2b3445;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
`;

export const Status = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #ffffff;
  margin-top: 10px;
  padding-left: 20px;
`;

export const LastView = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
  margin-top: 15px;
  padding-left: 20px;
`;

export const Category = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
`;

export const ViewStatus = styled.View`
  width: 377px;
  height: 93px;
  margin: 0 0;
  background: ${colors.secondary};
`;

export const ViewUser = styled.View`
  padding-left: 15px;
  flex-direction: row;
  align-items: center;
  width: 377px;
  height: 55px;
`;

export const ButtonUser = styled.TouchableOpacity`
  padding-left: 5px;
`;

export const ViewName = styled.View`
  padding-left: 15px;
  width: 377px;
  height: 50px;
  flex-direction: row;
`;

export const CountryIcon = styled.Image`
width: 17.33px;
height: 13px;
margin-left: 10px;
margin-right: 5px;
`;

export const ViewImage = styled.View`

`;

export const UserImage = styled.Image`
width: 145px;
height: 149px;
margin-right: 20px;
margin-left: -75px;
`;

export const ViewUserDetails = styled.View`
justify-content: start;
`;

export const ViewUserComplete = styled.View`
  flex-direction: row;
`;