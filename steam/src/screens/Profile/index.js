import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import { Category, Container, Country, EditButton, LastView, Level, Name, Service, Status, TextButton, Title, Top, User } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "../../components/Menu";

export default function Profile() {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  };
  
  return (
      <Container>
        <Header title={"community"} iconName={"ios-chevron-back"} goBack={goBack}  />
        <User>missfalk</User>
        <Name>Grazi Falk</Name>
        <Country>Brazil</Country>
        <Level>Level</Level>
        <Service>Years of Service</Service>
        <Service>600 XP</Service>
        <EditButton>
        <TextButton>Edit Profile</TextButton>
        </EditButton>
        <Status>Currently Offline</Status>
        <LastView>Last Online 47 days ago</LastView>
        <Category>Badges</Category>
        <Category>Groups</Category>
        <Category>Friends</Category>
        <Category>Games</Category>
        <Menu />
        <StatusBar style="auto" />
      </Container>
  );
}
