import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomDrawer from "./CustomDrawer";
import { red } from "../utils/style/colors";
import BottomTabStack from "./BottomTabStack";
const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,      
        headerTitle: "ChatMe",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Chats"
        component={BottomTabStack}
        options={{
          drawerIcon: () => (
            <Icon name="photo-library" size={22} color={red} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
};

export default DrawerStack;
