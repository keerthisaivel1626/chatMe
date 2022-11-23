import React from "react";
import { FlatList } from "react-native";
import { DummyChat } from "../../../../shared/modal/dummyChatData";
import ChatListItem from "./ChatListItem";
const ChatsList = () => {
  // render
  return (
    <FlatList
      data={DummyChat}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsList;
