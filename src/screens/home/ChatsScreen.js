import { View, StyleSheet } from "react-native";
import React from "react";
import ChatListItem from "../../components/home/chat/ChatList/ChatListItem";
import ChatsList from "../../components/home/chat/ChatList/ChatsList";
const ChatsScreen = () => {
  const chat = {
    id: "1",
    user: {
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
      name: "Lukas",
    },
    lastMessage: {
      text: "Oke",
      createdAt: "07:30",
    },
  };
  return (
    <View style={styles.container}>
      <ChatsList />
    </View>
  );
};

export default ChatsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingVertical: 5,
  },
});
