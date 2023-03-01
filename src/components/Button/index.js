import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonUI = ({
  type = "default",
  press = () => {},
  toPage,
  title = "Push",
  paddingH = 20,
  backColor = "#243763",
  textColor = "#FFFFFF",
  paddingV = 10,
  fontSize = 16,
  img,
  width,
  height,
}) => {
  const navigation = useNavigation();
  if (type == "navigation") {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(toPage)}
        style={styles.button(paddingH, paddingV, backColor)}
      >
        <Text style={styles.buttonText(textColor, fontSize)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (type == "icon") {
    return (
      <TouchableOpacity
        onPress={press}
        style={styles.button(paddingH, paddingV, backColor)}
      >
        <Image style={styles.buttonIcon(width, height)} source={img} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.button(paddingH, paddingV, backColor)}
      onPress={press}
    >
      <Text style={styles.buttonText(textColor, fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: (paddingH, paddingV, backColor) => ({
    borderRadius: 40,
    paddingHorizontal: paddingH,
    paddingVertical: paddingV,
    alignItems: "center",
    backgroundColor: backColor,
  }),
  buttonText: (textColor, fontSize) => ({
    color: textColor,
    fontSize: fontSize,
  }),

  buttonIcon: (width, heigth) => ({
    width: width,
    height: heigth,
  }),
});
