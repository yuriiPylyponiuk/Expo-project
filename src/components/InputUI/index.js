import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const InputUI = ({
  value = "",
  changeInputData,
  width = 180,
  height = 40,
  color = "#000",
}) => {
  return (
    <View>
      <TextInput
        onChangeText={(data) => changeInputData(data)}
        value={value}
        style={styles.input(width, height, color)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: (width, height, color) => ({
    height: height,
    width: width,
    borderColor: color,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
  }),
});
