import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import {
  Category,
  Container,
  Country,
  EditButton,
  LastView,
  Level,
  Name,
  Service,
  Status,
  TextButton,
  User,
  ViewStatus,
  ViewUser,
  ViewName,
  ButtonUser,
  CountryIcon,
  ViewImage,
  UserImage,
  ViewUserDetails,
  ViewUserComplete,
  ViewButton
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "../../components/Menu";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../themes/colors";

export default function Profile() {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header
        title={"community"}
        iconName={"ios-chevron-back"}
        goBack={goBack}
      />
      <ViewUser>
        <User>missfalk</User>
        <ButtonUser>
          <AntDesign name="caretdown" size={12} color={colors.tertiary} />
        </ButtonUser>
      </ViewUser>
      <ViewName>
        <Name>Grazi Falk</Name>
        <CountryIcon source={require("../../../assets/brazil.svg")} />
        <Country>Brazil</Country>
      </ViewName>
      <ViewUserComplete>
      <ViewImage>
      <UserImage source={require("../../../assets/user.jpg")} />
      </ViewImage>
      <ViewUserDetails>
      <Level>Level</Level>
      <Service>Years of Service</Service>
      <Service>600 XP</Service>
      </ViewUserDetails>
      </ViewUserComplete>
      <ViewButton>
      <EditButton>
        <TextButton>Edit Profile</TextButton>
      </EditButton>
      </ViewButton>
      <ViewStatus>
        <Status>Currently Offline</Status>
        <LastView>Last Online 47 days ago</LastView>
      </ViewStatus>
      <Category>Badges</Category>
      <Category>Groups</Category>
      <Category>Friends</Category>
      <Category>Games</Category>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
