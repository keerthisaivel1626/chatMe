import React from 'react';
import {StyleSheet, View, TextInput, Text, Pressable} from 'react-native';
import {
  SMALL_VERTICAL_SPACE,
  MEDIUM_SMALL_VERTICAL_SPACE,
  SMALL,
} from '../../utils/data';
import Icons from 'react-native-vector-icons/Entypo';
const FormInput = ({
  value,
  onChangeText,
  errorStyle = {},
  setShowPassword,
  type,
  ShowPassword,
}) => {
  return (
    <View style={{ ...styles.InputContainer, ...errorStyle }}>
      <View>
        {type === "phone" ? (
          <Icons
            color={"black"}
            name="phone"
            size={MEDIUM_SMALL_VERTICAL_SPACE}
          />
        ) : (
          <Icons
            color={"black"}
            name="key"
            size={MEDIUM_SMALL_VERTICAL_SPACE}
          />
        )}
      </View>
      <TextInput
        keyboardType={type === "phone" ? "phone-pad" : "default"}
        secureTextEntry={ShowPassword ? false : true}
        style={styles.InputText}
        returnKeyType={type === "phone" ? "next" : "go"}
        placeholder={type === "phone" ? "9876543210" : "********"}
        value={value}
        onChangeText={onChangeText}
      />
      {type === "password" && (
        <View style={{ alignItems: "flex-end" }}>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [
              pressed ? styles.pressableButtonContainer : null,
            ]}
            onPress={() => setShowPassword(!ShowPassword)}
          >
            {ShowPassword ? (
              <Icons
                color={"black"}
                name="eye"
                size={MEDIUM_SMALL_VERTICAL_SPACE}
              />
            ) : (
              <Icons
                color={"black"}
                name="eye-with-line"
                size={MEDIUM_SMALL_VERTICAL_SPACE}
              />
            )}
          </Pressable>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  InputContainer: {
    height: 60,
    borderRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 14,
    overflow: "hidden",
    borderWidth: 1,
    alignItems: "center",
    borderColor: "gray",
  },
  InputText: {
    flex: 1,
    paddingLeft: SMALL_VERTICAL_SPACE,
    color: "black",
    fontSize: SMALL,
  },

  pressableButtonContainer: {
    opacity: 0.5,
  },
});
export default FormInput;
