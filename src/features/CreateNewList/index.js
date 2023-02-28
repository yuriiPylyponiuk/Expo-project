import React, { useState } from "react";
import { View } from "react-native";
import { ButtonNewList } from "../ButtonNewList";
import { ModalAddNewList } from "../ModalAddNewList";

export const CreateNewList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <ButtonNewList showModal={showModal} />
      <ModalAddNewList showModal={showModal} modalVisible={modalVisible} />
    </View>
  );
};
