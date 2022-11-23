import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import DrawerStack from "./DrawerStack";
import TopTabStack from "./TopTabStack";
import { red } from "../utils/style/colors";
import SplashStack from "./SplashStack";
import SingleChatScreen from "../screens/home/SingleChatScreen";
import BottomTabStack from "./BottomTabStack";
import NotImplementedScreen from "../screens/home/NotImplementedScreen";
export default function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={"DrawerStack"}
      screenOptions={{
        headerShown: true,
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
        name="BottomTabStack"
        component={BottomTabStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopTabStack"
        component={TopTabStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="SingleChat" component={SingleChatScreen} />
      <Stack.Screen name="Group Info" component={NotImplementedScreen} />
      <Stack.Screen name="Contacts" component={NotImplementedScreen} />
      <Stack.Screen name="New Group" component={NotImplementedScreen} />
    </Stack.Navigator>
  );
}
