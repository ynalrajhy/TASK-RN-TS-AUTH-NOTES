import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (value: string) => {
  try {
    await AsyncStorage.setItem("token", value);
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem("token");
  } catch (error) {
    console.log(error);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
};

export { storeToken, getToken, removeToken };
