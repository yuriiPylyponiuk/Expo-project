import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";

import { ButtonUI, InputUI } from "../../components";
import { addNewTodo } from "..//..//redux/todo/todoAction";

export const ContorBlock = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const saveTodo = () => {
    dispatch(addNewTodo({ text: inputData, id: uuid.v4(), edit: true }));
    setInputData("");
  };

  return (
    <View style={styles.contorBlock}>
      <InputUI changeInputData={setInputData} value={inputData} width={220} />
      <ButtonUI press={saveTodo} title="Create" paddingH={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  contorBlock: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
