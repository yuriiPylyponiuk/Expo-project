import React from "react";
import { StyleSheet, Text } from "react-native";

import { constants } from "../../constants";
import { ClicableContainer } from "../ClicableContainer";

export const MainListItem = ({ item, name, userClick = () => {} }) => {
  return (
    <ClicableContainer userClick={() => userClick(item)}>
      <Text style={styles.homeText}>{name}</Text>
    </ClicableContainer>
  );
};

const styles = StyleSheet.create({
  homeText: {
    paddingHorizontal: 20,
    fontSize: 24,
    color: "#243763",
    fontWeight: "700",
    borderBottomColor: constants.color.blue,
  },
});
