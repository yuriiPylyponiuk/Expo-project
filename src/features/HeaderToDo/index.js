import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArrowBackButton } from "../../components";

export const HeaderToDo = () => {
  return (
    <View style={styles.arrowBack}>
      <ArrowBackButton />
      <Text style={styles.arrowBackText}>{"Here are your todos"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowBack: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  arrowBackText: {
    fontSize: 18,
  },
});
