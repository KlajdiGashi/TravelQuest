import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import shieldIcon from '../assets/shield.png';
import resumeIcon from '../assets/resume.png';
import wallet from '../assets/wallet.png';
import Logo from '../assets/Logo.png';
import Document from '../assets/Document.png';
import BackgroundImage from '../assets/BackgroundImage.png';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleLogout = () => {
    // Clear user session or something?.
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.header}>Account Settings</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('PasswordAndSecurity')}>
        <Image source={shieldIcon} style={styles.icon} />
        <Text style={styles.buttonText}>Pgitassword and Security</Text>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('PersonalDetails')}>
        <Image source={resumeIcon} style={styles.icon} />
        <Text style={styles.buttonText}>Personal Details</Text>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('PaymentMethod')}>
        <Image source={wallet} style={styles.icon} />
        <Text style={styles.buttonText}>Travel Payment</Text>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Image source={Document} style={styles.icon} />
        <Text style={styles.buttonText}>Your Information and Permissions</Text>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  header: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    color: 'white',
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SettingsScreen;
