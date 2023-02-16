import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonUI } from "../Button";
import { ClicableContainer } from "../ClicableContainer";
export const TodoItem = ({
  elem,
  userClick = () => {},
  deleteClick = () => {},
  id,
  doneOne = () => {},
  edit,
}) => {
  return (
    <ClicableContainer userClick={() => userClick(id)}>
      {edit ? (
        <View style={styles.todoBlock}>
          <Text style={styles.todoItemText}>{elem}</Text>
          <View style={styles.todoControlBlock}>
            <ButtonUI press={() => doneOne(id)} title={"V"} />
            <ButtonUI press={() => deleteClick(id)} title={"X"} />
          </View>
        </View>
      ) : (
        <View style={styles.todoSubBlockDone}>
          <View style={styles.todoBlockDone}>
            <Text style={styles.todoItemTextDone}>{elem}</Text>
            <ButtonUI press={() => deleteClick(id)} title={"X"} />
          </View>
        </View>
      )}
    </ClicableContainer>
  );
};

const styles = StyleSheet.create({
  todoBlock: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderBottomColor: "#FF6E31",
    borderBottomWidth: 1,
  },
  todoItemText: {
    fontSize: 18,
    color: "#243763",
    flex: 6,
  },
  todoControlBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 3,
  },

  todoSubBlockDone: {
    backgroundColor: "rgba(209, 202, 182, 0.5)",
  },
  todoBlockDone: {
    borderBottomWidth: 1,
    borderBottomColor: "#FF6E31",
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoItemTextDone: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#243763",
  },
});
