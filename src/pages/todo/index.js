import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import { ContorBlock, DefaultTodo, HeaderToDo } from "../../features";
import { setBackgroundColor } from "../../redux/theme/themeAction";

import { useRoute } from "@react-navigation/core";
import { constants } from "../../constants";

export const Todo = () => {
  return (
    <View style={styles.todo}>
      <StatusBar style="dark" />
      <HeaderToDo />
      <ContorBlock />
      <DefaultTodo />
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: constants.color.background,
  },
});
