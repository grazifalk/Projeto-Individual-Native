import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
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

  return (
    <Container>
      <Title>SIGN IN</Title>
      <InputText>steam account name</InputText>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholderTextColor={"white"}
      />
      <InputText>password</InputText>
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholderTextColor={"white"}
      />
      <StButton>
        <TextButton>Sign in</TextButton>
      </StButton>
      <TouchableOpacity>
        <Recover>Forgot your account name or password?</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}