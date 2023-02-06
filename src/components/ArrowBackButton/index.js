import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { icons } from "../../../assets";

export const ArrowBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={{ width: 40, height: 40, color: "red" }}
        source={icons.arrow}
      />
    </TouchableOpacity>
  );
};
