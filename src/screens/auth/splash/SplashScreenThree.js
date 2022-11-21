import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { height, width } from "../../../utils/data";

const SplashScreenThree = ({navigation}) => {
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LottieView
        style={{ height: height * 0.5, width: width * 0.26 }}
        source={require("../../../assets/animations/splash2.json")}
        autoPlay
        loop={false}
        speed={2}
        onAnimationFinish={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

export default SplashScreenThree;
