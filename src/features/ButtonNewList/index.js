import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

import { ButtonUI } from "../../components";

export const ButtonNewList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(!modalVisible);
  };
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
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text>{"Hello"}</Text>
        </View>
        <View style={styles.closeBtn}>
          <ButtonUI
            press={showModal}
            title="+"
            paddingV={15}
            paddingH={25}
            fontSize={25}
          />
        </View>
      </Modal>
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
  modal: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 100,
    height: 100,
    opacity: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 5,
    transform: [{ rotate: "45deg" }],
  },

  homeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 5,
  },
});
