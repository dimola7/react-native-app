import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import colors from '../components/constants/colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
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
                        <Ionicons name="ios-home" size={25}/>
                      </>
                    );
    
                  case "Settings":
                    return (
                      <>
                        <Ionicons name="ios-cog" size={25}/>
                      </>
                    );
                }
              },
        })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default Tabs