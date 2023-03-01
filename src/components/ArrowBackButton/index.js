import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { icons } from "../../../assets";

export const ArrowBackButton = ({ back }) => (
  <TouchableOpacity onPress={() => back()}>
    <Image
      style={{ width: 40, height: 40, color: "red" }}
      source={icons.arrow}
    />
  </TouchableOpacity>
);
