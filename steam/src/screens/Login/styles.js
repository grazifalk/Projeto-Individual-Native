import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: #292c33;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  width: 163px;
  height: 59px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 53px;
  color: ${colors.tertiary};
  text-align: center;
  margin-top: -250px;
  margin-bottom: 30px;
`;

export const InputText = styled.Text`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.tertiary};
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const InputLogin = styled.TextInput`
  width: 327px;
  height: 71px;

  background: ${colors.secondary};
  border-radius: 10px;
  margin-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const InputPassword = styled.TextInput`
  width: 327px;
  height: 71px;

  background: ${colors.secondary};
  border-radius: 10px;
  margin-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Recover = styled.Text`
  width: 270px;
  height: 54px;

  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  color: ${colors.tertiary};
`;

export const StButton = styled.TouchableOpacity`
  width: 327px;
  height: 63px;
  background: ${colors.buttonColor};
  border-radius: 10px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  position: absolute;
  text-align: center;
  color: ${colors.tertiary};
  width: 76px;
  height: 32px;
  font-size: 24px;
  font-weight: 400;
  font-family: sans-serif;
`;