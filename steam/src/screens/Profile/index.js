import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import {
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
  ServiceYears,
  TextCategory,
  CardsCategory,
  CardsCategoryRight,
  ViewCategory,
  CardsCategoryLeft,
  LevelImage,
  ViewLevel,
  ViewService,
  ViewInfos,
  ViewImageService,
  BadgesImage,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "../../components/Menu";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../themes/colors";
import { View } from "react-native";

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
          <ViewLevel>
            <Level>Level</Level>
            <LevelImage source={require("../../../assets/level-icon.svg")} />
          </ViewLevel>
          <ViewService>
            <ViewImageService>
              <ServiceYears
                source={require("../../../assets/service-years.jpg")}
              />
            </ViewImageService>
            <ViewInfos>
              <Service>Years of Service</Service>
              <Service>600 XP</Service>
            </ViewInfos>
          </ViewService>
          <EditButton>
            <TextButton>Edit Profile</TextButton>
          </EditButton>
        </ViewUserDetails>
      </ViewUserComplete>
      <ViewStatus>
        <Status>Currently Offline</Status>
        <LastView>Last Online 47 days ago</LastView>
      </ViewStatus>
      <ViewCategory>
        <CardsCategoryLeft>
          <TextCategory>
            Badges <span style={{ fontSize: "25px" }}>29</span>
          </TextCategory>
          <BadgesImage source={require("../../../assets/badges.svg")} />
        </CardsCategoryLeft>
        <CardsCategoryRight>
          <TextCategory>
            Groups <span style={{ fontSize: "25px" }}>15</span>
          </TextCategory>
          <BadgesImage source={require("../../../assets/groups.svg")} />
        </CardsCategoryRight>
      </ViewCategory>
      <ViewCategory>
        <CardsCategoryLeft>
          <TextCategory>
            Friends <span style={{ fontSize: "25px" }}>17</span>
          </TextCategory>
          <BadgesImage source={require("../../../assets/friends.svg")} />
        </CardsCategoryLeft>
        <CardsCategoryRight>
          <View>
            <TextCategory>
              Games <span style={{ fontSize: "25px" }}>191</span>
            </TextCategory>
            <BadgesImage source={require("../../../assets/games.svg")} />
          </View>
        </CardsCategoryRight>
      </ViewCategory>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
