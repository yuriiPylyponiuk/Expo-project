import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "../../../assets";
import { resetAllData } from "../../redux/todo/todoAction";

export const ArrowBackButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
    dispatch(resetAllData());
  };
  return (
    <TouchableOpacity onPress={() => back()}>
      <Image
        style={{ width: 40, height: 40, color: "red" }}
        source={icons.arrow}
      />
    </TouchableOpacity>
  );
};
