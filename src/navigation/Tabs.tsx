import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// screens
import { Home } from "../screens/home";
import { Settings } from "../screens/settings";
import { Favourites } from "../screens/favourites";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.grey,
          height: "10%",
        },
        headerStyle: {
          backgroundColor: colors.grey,
        },
        tabBarIcon: () => {
          switch (route.name) {
            case "Favourites":
              return <MaterialCommunityIcons name="heart-outline" size={30} />;
            case "Settings":
              return <MaterialCommunityIcons name="cog" size={30} />;
            default: 
            case "Home":
              return <MaterialCommunityIcons name="home" size={30} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Tabs;
