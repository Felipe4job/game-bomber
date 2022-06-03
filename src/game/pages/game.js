import React from "react";
import { View, StyleSheet } from "react-native";
import {
  heightGameArea,
  windowHeight,
  windowWidth,
  widthGameArea,
  widthScore,
} from "../utils/styleSheet";

export default function Game() {
  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}></View>
      <View style={styles.score}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    // apagar depois
    borderStyle: "solid",
    borderRadius: 2,
    borderColor: "#FF0000",
    width: windowWidth,
    height: windowHeight,
  },
  gameContainer: {
    display: "flex",
    height: heightGameArea,
    width: widthGameArea,
    backgroundColor: "#800000",
  },
  score: {
    display: "flex",
    height: heightGameArea,
    width: widthScore,
    backgroundColor: "#FF1493",
  },
});
