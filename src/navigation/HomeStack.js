import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import DrawerStack from "./DrawerStack";
import TopTabStack from "./TopTabStack";
import { red } from "../utils/style/colors";
import SplashStack from "./SplashStack";

export default function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={"DrawerStack"}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: red,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashStack"
        component={SplashStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopTabStack"
        component={TopTabStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
