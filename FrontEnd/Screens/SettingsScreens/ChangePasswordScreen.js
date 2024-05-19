// ChangePasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Added for consistency with the LoginScreen
import Logo from '../../assets/Logo.png';
import BackgroundImage from '../../assets/BackgroundImage.png';

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const navigation = useNavigation();

  const handleChangePassword = () => {
    // Logic to handle password change
    alert('Password changed successfully!');
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Current Password:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter current password"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            onChangeText={setNewPassword}
            value={newPassword}
            placeholder="Enter new password"
            placeholderTextColor="#aaa"
            secureTextEntry={!showNewPassword}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#121212',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: 'black',
    marginBottom: 5,
  },
  passwordContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  button: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
});

export default ChangePasswordScreen;
