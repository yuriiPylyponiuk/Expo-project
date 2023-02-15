import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonUI = ({
  type = "default",
  press = () => {},
  toPage,
  title = "Push",
  paddingH = 20,
  backColor = "#243763",
  textColor = "#FFFFFF",
}) => {
  const navigation = useNavigation();
  if (type == "navigation") {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(toPage)}
        style={styles.button(paddingH, backColor)}
      >
        <Text style={styles.buttonText(textColor)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.button(paddingH, backColor)}
      onPress={press}
    >
      <Text style={styles.buttonText(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: (paddingH, backColor) => ({
    borderRadius: 40,
    paddingHorizontal: paddingH,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: backColor,
  }),
  buttonText: (textColor) => ({
    color: textColor,
  }),
});
