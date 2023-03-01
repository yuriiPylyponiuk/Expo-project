import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import { useDispatch, useSelector } from "react-redux";

import { TodoItem } from "../../components";
import { constants } from "../../constants";
import { clearAll, getData, storeData } from "../../helper/asyncStorage";
import {
  DeleteOne,
  DoneOne,
  FillFromStore,
} from "..//..//redux/todo/todoAction";

export const DefaultTodo = () => {
  const route = useRoute();
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    storeList();
  }, [list]);

  useEffect(() => {
    setStoredList();
  }, []);

  const storeList = () => {
    if (list && list.todoList && list.todoList.length) {
      storeData(route.params.id, list.todoList);
    }
  };

  const setStoredList = async () => {
    const storedList = await getData(route.params.id);
    if (storedList) {
      dispatch(FillFromStore(storedList));
    } else {
      dispatch(FillFromStore([]));
    }
  };

  const deleteOne = (deleteId) => {
    const newAreyTodos = list.todoList.filter((item) => item.id !== deleteId);
    dispatch(DeleteOne(newAreyTodos));
    storeData(route.params.id, newAreyTodos);
  };

  const showDetails = (detailsId) => {
    console.log(detailsId);
  };

  const doneOne = (changeId) => {
    let newItem = {};
    let data = [];

    const newAreyTodos = list.todoList.filter((item) => {
      if (item.id == changeId) {
        newItem = { ...item };
        newItem.done = !newItem.done;
      } else {
        return item;
      }
    });

    if (newItem.done) {
      data = [newItem, ...newAreyTodos];
    } else {
      data = [...newAreyTodos, newItem];
    }

    dispatch(DoneOne(data));
  };

  return (
    <SafeAreaView style={styles.todoListBlock}>
      {list.showList && (
        <FlatList
          style={styles.flatList}
          data={list.todoList}
          renderItem={({ item }) => (
            <TodoItem
              userClick={showDetails}
              deleteClick={deleteOne}
              elem={item.text}
              id={item.id}
              done={item.done}
              doneOne={doneOne}
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
  flatList: {
    borderTopColor: constants.color.blue,
    borderTopWidth: 1,
  },
});
