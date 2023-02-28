import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { CreateNewList, DescriptionBlock, ListOfTodos } from "../../features";

export const Home = () => {
  return (
    <View style={styles.home}>
      <StatusBar style="dark" />
      <DescriptionBlock />
      <ListOfTodos />
      <CreateNewList />
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
