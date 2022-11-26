import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
  flex: 1;
  background-color: #292c33;
  align-items: center;
`;

export const User = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 30px;
  color: ${colors.tertiary};
`;

export const Name = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: ${colors.tertiary};
`;

export const Country = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: ${colors.tertiary};
`;

export const Level = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 32px;
  color: ${colors.tertiary};
`;

export const Service = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: ${colors.tertiary};
`;

export const EditButton = styled.TouchableOpacity`
  width: 192px;
  height: 42px;
  background: #2b3445;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 10px;
`;

export const TextButton = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: ${colors.tertiary};
  text-align: center;
`;

export const Status = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: ${colors.tertiary};
  margin-top: 10px;
  padding-left: 20px;
`;

export const LastView = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: ${colors.tertiary};
  margin-top: 15px;
  padding-left: 20px;
`;

export const TextCategory = styled.Text`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: ${colors.tertiary};
  margin-top: 15px;
  margin-left: 10px;
`;

export const ViewStatus = styled.View`
  width: 377px;
  height: 93px;
  margin: 0 0;
  margin-top: 60px;
  margin-bottom: 10px;
  background: ${colors.secondary};
`;

export const ViewUser = styled.View`
  padding-left: 15px;
  flex-direction: row;
  align-items: center;
  width: 377px;
  height: 55px;
  margin-top: 70px;
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
  margin-top: 3px;
`;

export const ViewImage = styled.View``;

export const UserImage = styled.Image`
  width: 145px;
  height: 149px;
  margin-right: 20px;
  margin-left: 10px;
`;

export const ViewUserDetails = styled.View`
  justify-content: start;
`;

export const ViewUserComplete = styled.View`
  flex-direction: row;
`;

export const ServiceYears = styled.Image`
  width: 65px;
  height: 65px;
  margin-left: 3px;
`;

export const ViewCategory = styled.View`
  flex-direction: row;
  margin: 0 0;
`;

export const CardsCategoryLeft = styled.View`
  width: 184px;
  height: 118px;
  background: ${colors.secondary};
  margin-bottom: 10px;
`;

export const CardsCategoryRight = styled.View`
  width: 184px;
  height: 118px;
  background: ${colors.secondary};
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Category = styled.View`
  width: 191px;
  height: 118px;
  left: 0px;
  top: 568px;
  background: ${colors.secondary};
`;

export const LevelImage = styled.Image`
  width: 51px;
  height: 42.03px;
  margin-left: 10px;
  justify-content: center;
`;

export const ViewLevel = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const ViewService = styled.View`
  flex-direction: row;
  width: 192px;
  height: 86px;
  background: ${colors.secondary};
  margin-left: 10px;
`;

export const ViewInfos = styled.View`
  justify-content: center;
  margin-left: 3px;
`;

export const ViewImageService = styled.View`
  justify-content: center;
`;

export const BadgesImage = styled.Image`
  width: 141.46px;
  height: 39.46px;
  margin-left: 10px;
  justify-content: center;
  margin-top: 25px;
`;