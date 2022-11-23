import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StatusScreen from "../screens/home/StatusScreen";
import ChatsScreen from '../screens/home/ChatsScreen';
const TopTabStack = () => {
const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={ChatsScreen} />
      <Tab.Screen name="FAVORITE" component={StatusScreen} />    
    </Tab.Navigator>
  );
}

export default TopTabStack