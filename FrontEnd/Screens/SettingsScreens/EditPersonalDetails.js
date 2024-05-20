import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackgroundImage from '../../assets/BackgroundImage.png';

const EditPersonalDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userData } = route.params;
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [number, setNumber] = useState(userData.number);
  const [birthday, setBirthday] = useState(userData.birthday);

  const handleSave = () => {
    // Implement save functionality here
    // You can use the state values (name, email, number, birthday) to save user's details
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Birthday:', birthday);
    // After saving, navigate back to PersonalDetailsScreen
    navigation.goBack();
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Number (optional)"
          placeholderTextColor="#aaa"
          value={number}
          onChangeText={setNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Birthday:</Text>
        <TextInput
          style={styles.input}
          placeholder="Birthday"
          placeholderTextColor="#aaa"
          value={birthday}
          onChangeText={setBirthday}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
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
  input: {
    backgroundColor: '#F5F5F5',
    color: 'black',
    borderRadius: 10,
    padding: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  saveButton: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  saveButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default EditPersonalDetailsScreen;
