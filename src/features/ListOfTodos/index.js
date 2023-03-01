import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import uuid from "react-native-uuid";
import { useDispatch, useSelector } from "react-redux";

import { MainListItem } from "../../components";
import { constants } from "../../constants";
import {
  clearAll,
  getAllKey,
  getData,
  storeData,
} from "../../helper/asyncStorage";
import { setTodosList } from "../../redux/homePage/homePageAction";

export const ListOfTodos = () => {
  const navigation = useNavigation();
  const titles = useSelector((state) => state.titles);
  const dispatch = useDispatch();

  useEffect(() => {
    // clearAll();
    getAllKey();
    setList();
  }, []);

  const setList = async () => {
    const value = await getData("listOfTodos");
    dispatch(setTodosList(value));
  };

  const navigateToTodos = (item) => {
    navigation.navigate(item.type, {
      name: item.name,
      id: item.id,
    });
  };

  return (
    <View style={styles.homeViewText}>
      {titles.listOfTodos ? (
        <FlatList
          data={titles.listOfTodos}
          renderItem={({ item }) => (
            <MainListItem
              item={item}
              userClick={navigateToTodos}
              name={item.name}
            />
          )}
          keyExtractor={() => uuid.v4()}
        />
      ) : (
        <View style={styles.homeTextBlck}>
          <Text style={styles.listOfTodosText}>{"Create your new List"}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  homeViewText: {
    flex: 1,
  },
  homeTextBlck: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  listOfTodosText: {
    fontSize: 20,
    color: constants.color.blue,
    fontWeight: "600",
  },
});
