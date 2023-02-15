import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import { useDispatch, useSelector } from "react-redux";

import { TodoItem } from "../../components";
import { DeleteOne } from "..//..//redux/todo/todoAction";

export const TodosList = () => {
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const storeData = async (value) => {
    await AsyncStorage.setItem("list", value);
  };

  const getData = async () => {
    await AsyncStorage.getItem("item1");
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  const deleteOne = (deleteId) => {
    const newAreyTodos = list.todoList.filter((item) => item.id !== deleteId);
    dispatch(DeleteOne(newAreyTodos));
  };

  const showDetails = (detailsId) => {
    console.log(detailsId);
  };

  return (
    <SafeAreaView style={styles.todoListBlock}>
      {list.showList && (
        <FlatList
          data={list.todoList}
          renderItem={({ item }) => (
            <TodoItem
              userClick={showDetails}
              deleteClick={deleteOne}
              elem={item.text}
              id={item.id}
            />
          )}
          keyExtractor={() => uuid.v4()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todoListBlock: {
    flex: 10,
  },
});
