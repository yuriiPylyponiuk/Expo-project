import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export const ClicableContainer = ({
  children,
  userClick,
  orientation,
  position,
  padding,
}) => {
  return (
    <TouchableOpacity
      style={styles.clickableContainer(orientation, position, padding)}
      onPress={userClick}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clickableContainer: (orientation, position, padding) => ({
    flexDirection: orientation,
    alignItems: position,
    paddingHorizontal: padding,
  }),
});
