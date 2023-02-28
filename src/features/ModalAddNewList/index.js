import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

import { ButtonUI, InputUI } from "../../components";
import { colors } from "../../constants/colors";

export const ModalAddNewList = ({ modalVisible, showModal }) => {
  const [inputData, setInputData] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={false}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalMainBlock}>
        <View style={styles.modalMainBlockTitle}>
          <Text style={styles.modalMainBlockTitleText}>
            {"Create you new list"}
          </Text>
        </View>
        <View style={styles.modalListName}>
          <Text style={styles.modalListNameText}>{"List Name:"}</Text>
          <InputUI
            color={colors.blue}
            height={50}
            changeInputData={setInputData}
            value={inputData}
            width={"100%"}
          />
        </View>
        <View style={styles.modalSelect}>
          <Text style={styles.modalSelectText}>{"List type:"}</Text>
          <View style={styles.modalSelectPicker}>
            <Picker
              selectedValue={selectedLanguage}
              mode={"dialog"}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Default" value="Default" />
              <Picker.Item label="Custom" value="Custom" />
            </Picker>
          </View>
        </View>
        <View style={styles.modalSaveButton}>
          <ButtonUI title="Create" />
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalMainBlock: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalMainBlockTitle: {
    paddingVertical: 20,
    alignItems: "center",
  },
  modalMainBlockTitleText: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.blue,
  },

  modalListName: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  modalListNameText: {
    fontSize: 16,
    color: colors.blue,
    marginBottom: 5,
  },

  modalSelect: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  modalSelectPicker: {
    borderBottomColor: colors.blue,
    display: "flex",
    borderBottomWidth: 1,
  },
  modalSelectText: {
    fontSize: 16,
    color: colors.blue,
  },

  modalSaveButton: {
    paddingHorizontal: 20,
    marginTop: 30,
    alignItems: "flex-end",
  },

  closeBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 5,
    transform: [{ rotate: "45deg" }],
  },
});
