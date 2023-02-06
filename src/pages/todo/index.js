import React from "react";
import { StyleSheet, View } from "react-native";

import { ButtonUI, InputUI } from "../../components";
import { HeaderToDo } from "../../features";

export const Todo = () => {
  return (
    <View style={styles.todo}>
      <HeaderToDo />
      <View style={styles.todoInputBlock}>
        <InputUI width={220} />
        <ButtonUI title="Create" paddingH={20} />
      </View>
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

  todoInputBlock: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  todoListBlock: {
    flex: 7,
  },
});
