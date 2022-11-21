import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  TextButton,
  StButton,
  Title,
  InputLogin,
  InputPassword,
  Recover,
  InputText,
} from "./styles";

export default function Login() {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation();

  function profile() {
    navigation.navigate("Profile");
  }

  return (
    <Container>
      <Title>SIGN IN</Title>
      <View>
      <InputText>steam account name</InputText>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholderTextColor={"white"}
      />
      </View>
      <View>
      <InputText>password</InputText>
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholderTextColor={"white"}
      />
      </View>
      <StButton>
        <TextButton onPress={profile}>Sign in</TextButton>
      </StButton>
      <TouchableOpacity>
        <Recover>Forgot your account name or password?</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}