import { View, Text, Pressable,Image, StyleSheet } from 'react-native'
import React from 'react'
import { width } from '../../utils/data';

const SocialButton = ({ image, onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        pressed ? styles.pressableButtonContainer : null,
      ]}
      onPress={onPress}
    >
      <Image source={image} style={styles.image} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 100 / 2,
  },
 
  pressableButtonContainer: {
    opacity: 0.5,
  },
});
export default SocialButton