import { Container, TitleContainer, Title, User } from "./styles.js";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../themes/colors.js";

export const Header = ({ title, goBack, iconName }) => {
  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name={iconName} size={35} color={colors.tertiary} />
      </TouchableOpacity>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <User source={require("../../../assets/user.jpg")} />
    </Container>
  );
};