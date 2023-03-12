import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import { CreateNewList, DescriptionBlock, ListOfTodos } from "../../features";
import { setBackgroundColor } from "../../redux/theme/themeAction";

import { constants } from "../../constants";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBackgroundColor(constants.color.background));
  }, []);

  return (
    <View style={styles.home}>
      <StatusBar style="dark" />
      <DescriptionBlock />
      <ListOfTodos />
      <CreateNewList />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: constants.color.background,
  },
});
