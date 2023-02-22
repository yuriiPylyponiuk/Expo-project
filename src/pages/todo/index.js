import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { ContorBlock, DefaultTodo, HeaderToDo } from "../../features";

export const Todo = () => {
  return (
    <View style={styles.todo}>
      <StatusBar style="dark" />
      <HeaderToDo />
      <ContorBlock />
      <DefaultTodo />
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#FFEBB7",
  },
});
