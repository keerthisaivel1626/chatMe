import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Pressable } from "react-native";

const Button = ({
  customStyle,
  title,
  titleStyle,
  onPress,
 
  type
}) => {
  const navigation = useNavigation();
  
  return (
    <Pressable
     
      onPress={
        title == "LOGIN"
          ? onPress
          :(title != "LOGIN"&& type == "signup")
          ? ()=>{navigation.navigate("Login")}
          : () => {
              navigation.navigate("SignUp");
            }
      }
      style={[
        { ...customStyle, justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={{ ...titleStyle }}>{title}</Text>
    </Pressable>
  );
};

export default Button;
