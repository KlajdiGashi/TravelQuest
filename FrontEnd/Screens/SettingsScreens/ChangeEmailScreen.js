// ChangeEmailScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Added for consistency
import Logo from '../../assets/Logo.png';
import BackgroundImage from '../../assets/BackgroundImage.png';
import { UserContext } from '../UserContext';

const ChangeEmailScreen = () => {
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const navigation = useNavigation();
  const {user_data} = useContext(UserContext)

  const handleChangeEmail = () => {
    // Logic to handle email change
    alert('Email changed successfully!');
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.inputContainer}>

        <Text style={styles.label}>Current Email:</Text>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.emailInput}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter current email"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Email:</Text>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.emailInput}
            onChangeText={setNewEmail}
            value={newEmail}
            placeholder="Enter new email"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleChangeEmail}>
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
  
  header: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: 'black',
    marginBottom: 5,
  },
  emailContainer: {
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
  emailInput: {
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

export default ChangeEmailScreen;
