import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ButtonNewList, ListOfTodos } from "../../features";

export const Home = () => {
  return (
    <View style={styles.home}>
      <StatusBar style="dark" />
      <ListOfTodos />
      <ButtonNewList />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fcb75b",
  },
});
