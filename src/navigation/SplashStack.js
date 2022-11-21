import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import ForgotPwdScreen from "../screens/auth/ForgotPwdScreen";
import SplashScreen from "../screens/auth/splash/SplashScreenOne";
import SplashScreenOne from "../screens/auth/splash/SplashScreenOne";
import SplashScreenTwo from "../screens/auth/splash/SplashScreenTwo";
import SplashScreenThree from "../screens/auth/splash/SplashScreenThree";
const SplashStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SplashScreenOne"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SplashScreenOne"
        component={SplashScreenOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreenTwo"
        component={SplashScreenTwo}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="SplashScreenThree"
        component={SplashScreenThree}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default SplashStack;
