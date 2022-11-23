import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../screens/home/NotImplementedScreen";
import ChatsScreen from "../screens/home/ChatsScreen";
import { Entypo, Ionicons } from "../utils/icons";
import TopTabStack from "./TopTabStack";
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="CHATS"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#555",
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        name="CHATS"
        component={TopTabStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Status"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Calls"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabStack;
<></>;
