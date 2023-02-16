import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  await AsyncStorage.setItem("list", JSON.stringify(value));
};

export const getData = async () => {
  const data = await AsyncStorage.getItem("list");
  return JSON.parse(data);
};

export const clearAll = async () => {
  await AsyncStorage.clear();
};
