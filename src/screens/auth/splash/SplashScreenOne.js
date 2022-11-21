import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { height, width } from "../../../utils/data";


const SplashScreenOne = ({navigation}) => {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <LottieView
          style={{ height: height*.5, width: width*.26 }}
          source={require("../../../assets/animations/splash1.json")}
          autoPlay
          loop={false}
          speed={2}
          onAnimationFinish={() => {
           navigation.navigate("SplashScreenTwo");
          }}
        />
      </View>
    </>
  );
};

export default SplashScreenOne;
