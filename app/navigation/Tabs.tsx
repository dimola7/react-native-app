import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// screens
import { Home } from "../screens/home";
import { Settings } from "../screens/settings";
import { Bookmarks } from "../screens/bookmark";
import { splash } from "../screens/splash";
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
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Home":
              return (
                <>
                  <MaterialCommunityIcons name="home" size={30} />
                </>
              );

            case "Bookmarks":
              return (
                <>
                  <MaterialCommunityIcons name="heart-outline" size={30} />
                </>
              );

            case "Settings":
              return (
                <>
                  <MaterialCommunityIcons name="cog" size={30} />
                </>
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmarks" component={Bookmarks} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Tabs;
