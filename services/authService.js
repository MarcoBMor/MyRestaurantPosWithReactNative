import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar token
const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('@auth_token', token);
  } catch (e) {
    console.error(e);
  }
};

// Recuperar token
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@auth_token');
    if(token !== null) {
      return token;
    }
  } catch(e) {
    console.error(e);
  }
};

export { storeToken, getToken };