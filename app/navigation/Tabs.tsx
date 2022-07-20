import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            // tabBarIcon: ({ focused }) => {

            // }
            tabBarIcon: ({ focused }) => {
                switch (route.name) {
                  case "Home":
                    return (
                      <>
                        <Ionicons name="ios-home" size={20}/>
                      </>
                    );
    
                  case "Settings":
                    return (
                      <>
                        <Ionicons name="ios-cog" size={20}/>
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