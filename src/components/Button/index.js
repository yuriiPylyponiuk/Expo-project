import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonUI = ({
  type = "default",
  press = () => {},
  toPage,
  title = "Push",
  paddingH = 20,
}) => {
  const navigation = useNavigation();
  if (type == "custom") {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(toPage)}
        style={styles.button(paddingH)}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.button(paddingH)} onPointerLeave={press}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: (paddingH) => ({
    borderRadius: 40,
    paddingHorizontal: paddingH,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#243763",
    color: "#FF6E31",
  }),
  buttonText: {
    color: "#fff",
  },
});
