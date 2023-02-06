import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const InputUI = ({ width = 180 }) => {
  return (
    <View>
      <TextInput style={styles.input(width)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: (width) => ({
    height: 40,
    width: width,
    borderWidth: 1,
  }),
});
