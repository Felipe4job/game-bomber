import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import start from "./pages/start";
import game from "./pages/game";
import about from "./pages/about";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={start} />
        <Stack.Screen name='Game' component={game} />
        <Stack.Screen name='About' component={about} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
