import React from "react";
import { Button, Text, View } from "react-native";

export default function Start({ navigation }) {
  return (
    <View>
      <Text>START</Text>
      <Button title='Game' onPress={() => navigation.navigate("Game")} />
      <Button title='About' onPress={() => navigation.navigate("About")} />
    </View>
  );
}
