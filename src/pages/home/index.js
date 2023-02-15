import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonUI } from "../../components";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <View style={styles.homeViewText}>
        <Text style={styles.homeText}>Welcome Home!</Text>
      </View>
      <View style={styles.homeButton}>
        <ButtonUI title={"Go To Todo"} type="navigation" toPage={"Todo"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fcb75b",
  },
  homeText: {
    fontSize: 24,
    color: "#243763",
    fontWeight: "700",
  },
  homeButton: {
    alignItems: "center",
    flex: 1,
  },
  homeViewText: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});
