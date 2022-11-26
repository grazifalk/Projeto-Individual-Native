import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  align-self: flex-start;
  width: 100%;
  height: 77px;
  background-color: ${colors.secondary};
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
  padding: 0 10px 0 10px;
  position: absolute;
  top: 0;
`;

export const TitleContainer = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  color: ${colors.tertiary};
  font-family: sans-serif;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
`;

export const User = styled.Image`
  width: 50px;
  height: 50px;
`;