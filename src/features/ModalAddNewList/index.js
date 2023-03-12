import { Picker } from "@react-native-picker/picker";
import * as NavigationBar from "expo-navigation-bar";
import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

import { ButtonUI, InputUI } from "../../components";
import { colors } from "../../constants/colors";

const types = [
  { name: "Select Type", value: "0" },
  { name: "Default", value: "Default" },
  { name: "Custom", value: "Custom" },
];

export const ModalAddNewList = ({ modalVisible, showModal, saveNewList }) => {
  const [inputData, setInputData] = useState("");
  const [selectedType, setSelectedType] = useState();
  const [errorinputData, setErrorInputData] = useState(false);
  const [errorselectedType, setErrorSelectedType] = useState(false);

  const showColor = async (themeColor) => {
    if (themeColor) {
      await NavigationBar.setBackgroundColorAsync(themeColor);
    }
  };

  const grabAllData = () => {
    inputData ? setErrorInputData(false) : setErrorInputData(true);
    selectedType ? setErrorSelectedType(false) : setErrorSelectedType(true);

    if (inputData && selectedType) {
      saveNewList({ inputData, selectedType });
    }
  };

  useEffect(() => {
    showColor(colors.background);
  }, []);

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
          <Text style={styles.modalListNameText(errorinputData)}>
            {"List Name:"}
          </Text>
          <InputUI
            color={colors.blue}
            height={50}
            changeInputData={setInputData}
            value={inputData}
            width={"100%"}
          />
        </View>
        <View style={styles.modalSelect}>
          <Text style={styles.modalSelectText(errorselectedType)}>
            {"List type:"}
          </Text>
          <View style={styles.modalSelectPicker}>
            <Picker
              mode="dialog"
              selectedValue={selectedType}
              onValueChange={(v) => setSelectedType(v)}
            >
              {types.map((value, index) => (
                <Picker.Item
                  label={value.name}
                  value={value.value}
                  key={index}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.modalSaveButton}>
          <ButtonUI press={grabAllData} title="Create" />
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
  modalListNameText: (errorinputData) => ({
    fontSize: 16,
    color: errorinputData ? "red" : colors.blue,
    marginBottom: 5,
  }),

  modalSelect: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  modalSelectPicker: {
    borderBottomColor: colors.blue,
    display: "flex",
    borderBottomWidth: 1,
  },
  modalSelectText: (errorselectedType) => ({
    fontSize: 16,
    color: errorselectedType ? "red" : colors.blue,
  }),

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
