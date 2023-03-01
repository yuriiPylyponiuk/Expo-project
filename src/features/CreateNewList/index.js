import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import uuid from "react-native-uuid";

import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../helper/asyncStorage";
import { createNew } from "../../redux/homePage/homePageAction";
import { resetAllData } from "../../redux/todo/todoAction";
import { ButtonNewList } from "../ButtonNewList";
import { ModalAddNewList } from "../ModalAddNewList";

export const CreateNewList = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const titles = useSelector((state) => state.titles);
  const dispatch = useDispatch();

  const showModal = () => {
    setModalVisible(!modalVisible);
  };

  const saveNewList = (data) => {
    const id = uuid.v4();
    let newList;

    if (titles.listOfTodos) {
      newList = [
        ...titles.listOfTodos,
        { name: data.inputData, id: id, type: data.selectedType },
      ];
    } else {
      newList = [{ name: data.inputData, id: id, type: data.selectedType }];
    }

    storeData("listOfTodos", newList);
    dispatch(createNew(newList));
    dispatch(resetAllData());
    setModalVisible(false);

    navigation.navigate(data.selectedType, {
      id: id,
      name: data.inputData,
    });
  };

  return (
    <View>
      <ButtonNewList showModal={showModal} />
      <ModalAddNewList
        saveNewList={saveNewList}
        showModal={showModal}
        modalVisible={modalVisible}
      />
    </View>
  );
};
