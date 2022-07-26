import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './app/navigation/Tabs';
import {Welcome} from "./app/screens/welcome";
import colors from './app/constants/colors';
import {ItemDetails} from "./app/screens/item-details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <AppButton title="Login"/> */}
      <NavigationContainer>
        {/* <Tabs /> */}
        <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="itemDetails" component={ItemDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
      </NavigationContainer>
      {/* <ItemDetails /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
