import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  console.log("save", key);
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getData = async (key) => {
  console.log("get", key);

  const data = await AsyncStorage.getItem(key);
  return JSON.parse(data);
};

export const clearAll = async () => {
  await AsyncStorage.clear();
};
export const getAllKey = async () => {
  const keys = await AsyncStorage.getAllKeys();
};

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
