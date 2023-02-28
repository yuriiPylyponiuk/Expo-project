import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

export const DescriptionBlock = () => {
  return (
    <View style={styles.descriptionBlock}>
      <Text style={styles.descriptionBlockText}>Your work space</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionBlock: {
    marginVertical: 10,
    backgroundColor: colors.blue,
    // marginHorizontal: 20,
  },
  descriptionBlockText: {
    fontSize: 18,
    borderBottomWidth: 1,
    color: colors.background,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
