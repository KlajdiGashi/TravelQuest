import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../../assets/BackgroundImage.png';

// Dummy user data 
const userData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  number: '1234567890',
  birthday: '01/01/1990',
};

const PersonalDetailsScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [birthday, setBirthday] = useState('');

  // Fetch user data when the component mounts
  useEffect(() => {
    // Simulating data fetching from a database
    setName(userData.name);
    setEmail(userData.email);
    setNumber(userData.number);
    setBirthday(userData.birthday);
  }, []);

  const handleEdit = () => {
    navigation.navigate('EditPersonalDetails', { userData });
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}> 
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Number:</Text>
        <Text style={styles.value}>{number}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Birthday:</Text>
        <Text style={styles.value}>{birthday}</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <Text style={styles.editButtonText}>Edit Details</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: 'white',
    fontSize: 18,
  },
  detailsContainer: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  value: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  editButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  editButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default PersonalDetailsScreen;
