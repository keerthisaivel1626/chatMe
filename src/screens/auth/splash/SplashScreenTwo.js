import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { height, width } from "../../../utils/data";
const SplashScreenTwo = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LottieView
        style={{ height: height*.5, width: width }}
        source={require("../../../assets/animations/splash3.json")}
        autoPlay
        loop={false}
        speed={2}
        onAnimationFinish={() => {
          navigation.navigate("SplashScreenThree");
        }}
      />
    </View>
  );
};

export default SplashScreenTwo;
