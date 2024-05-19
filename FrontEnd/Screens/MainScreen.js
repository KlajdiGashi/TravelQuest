import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../assets/BackgroundImage.png';

const MainScreen = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <TouchableOpacity style={styles.profileIconContainer} onPress={handleProfilePress}>
        <Image source={require('../assets/profile.png')} style={styles.profileIcon} />
      </TouchableOpacity>
      {/* Other components */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  profileIconContainer: {
    position: 'absolute',
    top: 40,
    right: 20,

  },
  profileIcon: {
    width: 40,
    height: 40,
  },
});

export default MainScreen;
