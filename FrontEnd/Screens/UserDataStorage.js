import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store user data
export const storeUserData = async (userData) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    console.log('User data stored successfully.');
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

// Function to retrieve user data
export const getUserData = async () => {
  try {
    const userDataString = await AsyncStorage.getItem('userData');
    if (userDataString !== null) {
      let userData = JSON.parse(userDataString);
      //console.log('User data retrieved successfully:', userData);
      return userData;
    } else {
      console.log('No user data found.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

// Function to clear user data
export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem('userData');
    console.log('User data cleared successfully.');
  } catch (error) {
    console.error('Error clearing user data:', error);
  }
};
