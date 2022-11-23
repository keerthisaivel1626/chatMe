import React,{useEffect} from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { bg } from "../../utils/image";
import { DummyMessage } from "../../shared/modal/dummyMessage";
import InputBox from "../../components/common/InputBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import Message from "../../components/home/chat/MessageList/Message";
const SingleChatScreen = () => {

 const navigation = useNavigation();
 const route = useRoute();

 useEffect(() => {
   navigation.setOptions({ title: route.params.name });
 }, [route.params]);
  // render
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={DummyMessage}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
   
  );
};

export default SingleChatScreen;
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
