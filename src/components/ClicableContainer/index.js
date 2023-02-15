import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export const ClicableContainer = ({ children, userClick }) => {
  return <TouchableOpacity onPress={userClick}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({});
