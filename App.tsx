import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './src/navigation/Tabs';
import {Welcome} from "./src/screens/welcome";
import colors from './src/constants/colors';
import {ItemDetails} from "./src/screens/item-details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Container>
      {/* <AppButton title="Login"/> */}
      <NavigationContainer>
        {/* <Tabs /> */}
        <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Home"
            >
                {/* Tabs */}
                <Stack.Screen name="HomeScreen" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="ItemDetails" component={ItemDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
      </NavigationContainer>
      {/* <ItemDetails /> */}
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    background-color: ${colors.grey};
    padding: 20px
`
