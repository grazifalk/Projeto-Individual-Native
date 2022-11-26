import colors from "../../themes/colors.js";
import { TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Container, UserIcon } from "./styles.js";
import { useNavigation } from "@react-navigation/native";

export const Menu = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name={"tag"}
          size={30}
          color={colors.tertiary}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name={"newspaper-variant-outline"}
          size={30}
          color={colors.tertiary}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name={"shield"} size={30} color={colors.tertiary} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name={"bell"}
          size={30}
          color={colors.tertiary}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <UserIcon source={require("../../../assets/user-icon.svg")} />
      </TouchableOpacity>
    </Container>
  );
};