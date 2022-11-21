import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import SocialButton from "../common/SocialButton";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { changeAuthStatus } from "../../redux/reducer/AuthReducer";
import { useNavigation } from "@react-navigation/native";
const SocialAuth = () => {
  const [data, setData] = useState([]);
   const dispatch = useDispatch();
   const navigation=useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "1074951801627-alul6hbe0fin152tth8cc804mkis22tr.apps.googleusercontent.com",
    });
  }, [data]);

  async function onGoogleButtonPress() {
    console.log("calling goole login");
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log(user.user.displayName);
        setData({
          name: user.user.displayName,
          email: user.user.email,
          image: user.user.photoURL,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(data.name);
  }

  const handleGoogleLogin = () =>
    onGoogleButtonPress().then(async () => {
      await AsyncStorage.setItem("login", "true");
      dispatch(changeAuthStatus(true));
      navigation.navigate("DrawerStack");
      console.log("Signed in with Google!");
    });

  return (
    <View style={styles.SocialAuthRootContainer}>
      <SocialButton
        image={require("../../assets/icons/google.png")}
        onPress={handleGoogleLogin}
      />
      <SocialButton image={require("../../assets/icons/facebook.png")} />
      <SocialButton image={require("../../assets/icons/linkedin.png")} />
    </View>
  );
};
const styles = StyleSheet.create({
  SocialAuthRootContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default SocialAuth;
