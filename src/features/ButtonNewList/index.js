import React from "react";
import { StyleSheet, View } from "react-native";

import { ButtonUI } from "../../components";

export const ButtonNewList = ({ showModal }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.homeButton}>
        <ButtonUI
          press={showModal}
          title="+"
          paddingV={15}
          paddingH={25}
          fontSize={25}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "relative",
  },

  homeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 5,
  },
});
