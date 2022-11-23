import React, { useEffect, useState, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import ForgotPwdScreen from "../screens/auth/ForgotPwdScreen";
import SplashStack from "./SplashStack";
import { useDispatch, useSelector } from "react-redux";
import { changeFirstLaunchStatus } from "../redux/reducer/AuthReducer";

const AuthStack = () => {
  const Stack = createStackNavigator();

  const dispatch = useDispatch();
  const { isNotFirstLaunch } = useSelector((state) => state.authReducer);

  useLayoutEffect(() => {
    const init = async () => {
      const firstLaunch = JSON.parse(
        await AsyncStorage.getItem("alreadyLaunched", (error, result) => {
          if (error) console.error("Something went wrong!");
          else if (result) console.log("App Launched successfully", result);
          else if (result === null) console.log("Key does not exists!");
        })
      );

      if (firstLaunch) {        
        dispatch(changeFirstLaunchStatus(true));
      }
    };
    init().finally(async () => {});
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isNotFirstLaunch ?  "Login":"Splash"}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="Splash"
        component={SplashStack}
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "" }}
      />

      <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ForgotPwd"
        component={ForgotPwdScreen}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
