import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArrowBackButton } from "../../components";

export const HeaderToDo = () => {
  const route = useRoute();

  return (
    <View style={styles.arrowBack}>
      <ArrowBackButton />
      <Text style={styles.arrowBackText}>{route.params.name}</Text>
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
