import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import FormContainer from "../common/FormContainer";
import {
  BIG_VERTICAL_SPACE,
  BIT_SMALL_VERTICAL_SPACE,
  MEDIUM_SMALL_VERTICAL_SPACE,
  MEDIUM_VERTICAL_SPACE,
  REGULAR_VERTICAL_SPACE,
  SMALL,
  VERY_SMALL_VERTICAL_SPACE,
} from "../../utils/data";
import FormHeader from "./FormHeader";
import HandleError from "./HandleError";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import { red } from "../../utils/style/colors";
import SocialAuth from "./SocialAuth";
const FormView = ({ values, handleChange, errors, handleSubmit, type }) => {
  const [ShowPassword, setShowPassword] = useState(false);
  return (
    <FormContainer>
      {type == "signup" ? (
        <FormHeader
          line2={"Create Account!"}
          line3={"Please enter your Email ID to get access"}
          type={type}
        />
      ) : (
        <FormHeader
          line1={"Hi,"}
          line2={"Welcome Back!"}
          line3={"Please enter your Email ID to get access"}
        />
      )}

      <FormInput
        value={values.phone}
        onChangeText={handleChange("phone")}
        type={"phone"}
      />
      <View style={{ height: MEDIUM_SMALL_VERTICAL_SPACE }} />
      <FormInput
        value={values.password}
        onChangeText={handleChange("password")}
        type={"password"}
        ShowPassword={ShowPassword}
        setShowPassword={setShowPassword}
      />
      {errors.phone || errors.password ? (
        <HandleError errors={errors} />
      ) : (
        <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
      )}
      <View style={styles.row}>
        <Button
          title={"LOGIN"}
          customStyle={{ ...styles.buttonCustomStyle, backgroundColor: "red" }}
          shadowStatus={true}
          titleStyle={{ ...styles.buttonText, color: "white" }}
          onPress={handleSubmit}
        />
        <Button
          title={type == "signup" ? "BACK" : "SIGNUP"}
          customStyle={styles.buttonCustomStyle}
          shadowStatus={true}
          titleStyle={styles.buttonText}
          type={type}
        />
      </View>
      {(errors.phone || errors.password) && (
        <View style={{ height: MEDIUM_VERTICAL_SPACE }} />
      )}
      <View style={{ height: REGULAR_VERTICAL_SPACE }} />
      <SocialAuth />
    </FormContainer>
  );
};
const styles = StyleSheet.create({
  buttonCustomStyle: {
    height: 65,
    borderWidth: 2,
    borderColor: red,
    width: "40%",
    borderRadius: 30,
  },
  buttonText: {
    color: red,
    fontSize: SMALL,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default FormView;
