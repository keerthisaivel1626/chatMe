import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import ContactListItem from '../../components/home/contact/ContactList/ContactListItem';
import { DummyChat } from '../../shared/modal/dummyChatData';

const ContactsScreen = () => {
// render
    return (
      <FlatList
        data={DummyChat}
        renderItem={({ item }) => <ContactListItem user={item.user} />}
        style={{ backgroundColor: "white" }}
      />
    );
}

export default ContactsScreen
