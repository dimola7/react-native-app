import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './src/navigation/Tabs';
import {Welcome} from "./src/screens/welcome";
import colors from './src/constants/colors';
import {ItemDetails} from "./src/screens/item-details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppButton title="Login"/> */}
      <NavigationContainer>
        {/* <Tabs /> */}
        <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                // initialRouteName="Home"
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="ItemDetails" component={ItemDetails} options={{ headerShown: false }} />
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
