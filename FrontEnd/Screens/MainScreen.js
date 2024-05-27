import React, { useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../assets/BackgroundImage.png';
import TicketView from './TicketView';
import Profile from '../assets/profile.png';
import { storeUserData, getUserData, clearUserData } from './UserDataStorage';
import Animated, { Easing } from 'react-native-reanimated';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';

// Sample tickets data

const getTickets = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/ticket`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred. Please try again later.');
  }
};
const tickets = getTickets();
/*
const tickets = [
  { id: 1, location: 'New York', details: 'Details about New York', imageUrl: 'https://source.unsplash.com/random/200x200?ticket' },
  { id: 2, location: 'Paris', details: 'Details about Paris', imageUrl: 'https://source.unsplash.com/random/200x200?concert' },
];*/


const MainScreen = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen');
  };

  const user_data = getUserData();
  console.log(user_data)
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground style={styles.headerBackground}>
          <Text style={styles.header}>Available Tickets</Text>
          <TouchableOpacity style={styles.profileIconContainer} onPress={handleProfilePress}>
            <Image source={Profile} style={styles.profileIcon} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {tickets.map(ticket => (
          <TicketView key={ticket.id} ticket={ticket} navigation={navigation} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    color: 'black',
    flex: 1,
    textAlign: 'left',
  },
  profileIconContainer: {
    marginLeft: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
  scrollContainer: {
    paddingTop: 20,
  },
});

export default MainScreen;
