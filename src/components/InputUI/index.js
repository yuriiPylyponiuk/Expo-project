import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const InputUI = ({ value = "", changeInputData, width = 180 }) => {
  return (
    <View>
      <TextInput
        onChangeText={(data) => changeInputData(data)}
        value={value}
        style={styles.input(width)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: (width) => ({
    height: 40,
    width: width,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
  }),
});
