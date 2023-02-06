import React from "react";
import { StyleSheet, View } from "react-native";

import { ContorBlock, HeaderToDo } from "../../features";

export const Todo = () => {
  return (
    <View style={styles.todo}>
      <HeaderToDo />
      <ContorBlock />
      <View style={styles.todoListBlock}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#FFEBB7",
  },

  todoListBlock: {
    flex: 10,
  },
});
