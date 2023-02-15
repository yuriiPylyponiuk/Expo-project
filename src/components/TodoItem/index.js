import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonUI } from "../Button";
import { ClicableContainer } from "../ClicableContainer";
export const TodoItem = ({
  elem,
  userClick = () => {},
  deleteClick = () => {},
  id,
}) => {
  return (
    <ClicableContainer userClick={() => userClick(id)}>
      <View style={styles.todoBlock}>
        <Text style={styles.todoItemText}>{elem}</Text>
        <ButtonUI press={() => deleteClick(id)} title={"X"} />
      </View>
    </ClicableContainer>
  );
};

const styles = StyleSheet.create({
  todoBlock: {
    borderBottomColor: "#FF6E31",
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  todoItemText: {
    fontSize: 18,
    color: "#243763",
  },
});
