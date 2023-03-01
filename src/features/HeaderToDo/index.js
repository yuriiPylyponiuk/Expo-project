import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { ArrowBackButton } from "../../components";
import { constants } from "../../constants";
import { resetAllData } from "../../redux/todo/todoAction";

export const HeaderToDo = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
    dispatch(resetAllData());
  };

  return (
    <View style={styles.arrowBack}>
      <ArrowBackButton back={back} />
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
    color: constants.color.blue,
    fontWeight: "600",
    fontSize: 19,
  },
});
