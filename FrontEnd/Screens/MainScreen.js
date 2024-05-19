import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../assets/BackgroundImage.png';
import TicketView from './TicketView';
import Profile from '../assets/profile.png';
import Animated, { Easing } from 'react-native-reanimated';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';

// Sample tickets data, you can replace this with your actual data source
const tickets = [
  { id: 1, location: 'New York', details: 'Details about New York' },
  { id: 2, location: 'Paris', details: 'Details about Paris' },
  // Add more tickets as needed
];

const MainScreen = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Available Tickets</Text>
        <TouchableOpacity style={styles.profileIconContainer} onPress={handleProfilePress}>
          <Image source={Profile} style={styles.profileIcon} />
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    color: 'white',
    flex: 1,
    textAlign: 'left',
  },
  profileIconContainer: {
    marginRight: 10,
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
