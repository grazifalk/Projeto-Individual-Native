import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Profile from "../screens/Profile";

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}