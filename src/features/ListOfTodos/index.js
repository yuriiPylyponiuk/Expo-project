import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export const ListOfTodos = () => {
  const titles = useSelector((state) => state.titles);
  useEffect(() => {
    console.log(titles);
  }, []);
  return (
    <View style={styles.homeViewText}>
      <Text style={styles.homeText}>Welcome Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeViewText: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  homeText: {
    fontSize: 24,
    color: "#243763",
    fontWeight: "700",
  },
});
