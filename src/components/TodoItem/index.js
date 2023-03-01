import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { icons } from "../../../assets";
import { constants } from "../../constants";
import { ButtonUI } from "../Button";
import { ClicableContainer } from "../ClicableContainer";

export const TodoItem = ({
  elem,
  userClick = () => {},
  deleteClick = () => {},
  id,
  doneOne = () => {},
  done,
}) => {
  return (
    <ClicableContainer userClick={() => userClick(id)}>
      {done ? (
        <View style={styles.todoBlock}>
          <View style={styles.todoCheck}>
            <Checkbox
              style={styles.checkbox}
              value={!done}
              onValueChange={() => doneOne(id)}
            />
            <Text style={styles.todoItemText}>{elem}</Text>
          </View>
          <View style={styles.todoControlBlock}>
            <ButtonUI
              img={icons.delete}
              type="icon"
              backColor={"transparent"}
              width={20}
              height={20}
              press={() => deleteClick(id)}
            />
          </View>
        </View>
      ) : (
        <View style={styles.todoSubBlockDone}>
          <View style={styles.todoBlockDone}>
            <View style={styles.todoCheck}>
              <ButtonUI
                img={icons.checkmark}
                type="icon"
                width={25}
                height={25}
                paddingH={0}
                paddingV={0}
                press={() => doneOne(id)}
                backColor={"transparent"}
              />
              <Text style={styles.todoItemTextDone}>{elem}</Text>
            </View>
            <View style={styles.todoControlBlock}>
              <ButtonUI
                img={icons.delete}
                type="icon"
                width={20}
                height={20}
                backColor={"transparent"}
                press={() => deleteClick(id)}
              />
            </View>
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
    borderBottomColor: constants.color.blue,
    borderBottomWidth: 1,
  },
  checkbox: {},
  todoItemText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#243763",
    flex: 6,
  },
  todoCheck: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 4,
  },
  todoControlBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },

  todoSubBlockDone: {
    backgroundColor: "rgba(209, 202, 182, 0.5)",
  },
  todoBlockDone: {
    borderBottomWidth: 1,
    borderBottomColor: constants.color.blue,
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoItemTextDone: {
    marginLeft: 10,

    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#243763",
  },
});
