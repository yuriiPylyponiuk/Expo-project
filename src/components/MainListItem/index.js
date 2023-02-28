import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import { icons } from "../../../assets";
import { constants } from "../../constants";
import { ClicableContainer } from "../ClicableContainer";

export const MainListItem = ({ item, name, userClick = () => {} }) => {
  return (
    <ClicableContainer
      orientation={"row"}
      position={"center"}
      padding={15}
      userClick={() => userClick(item)}
    >
      <Image style={{ width: 35, height: 35 }} source={icons.checklist} />
      <Text style={styles.listText}>{name}</Text>
    </ClicableContainer>
  );
};

const styles = StyleSheet.create({
  listText: {
    paddingHorizontal: 5,
    fontSize: 18,
    color: constants.color.blue,
    fontWeight: "600",
    borderBottomColor: constants.color.blue,
  },
});
