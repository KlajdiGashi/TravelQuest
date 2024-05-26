import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const TicketView = ({ ticket, navigation }) => {
  const handlePress = () => {
    navigation.navigate('TicketDetail', { ticket });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.ticketContainer}>
        <View style={styles.ticketImagePlaceholder}>
          <SharedElement id={`item.${ticket.id}.image`}>
            <Text style={styles.placeholderText}>No Image</Text>
          </SharedElement>
        </View>
        <View style={styles.textContainer}>
          <SharedElement id={`item.${ticket.id}.text`}>
            <Text style={styles.ticketText}>{ticket.location}</Text>
          </SharedElement>
          <TouchableOpacity style={styles.fullViewButton} onPress={handlePress}>
            <Text style={styles.fullViewButtonText}>></Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    height: 190,
    backgroundColor: '#1e1e1e',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  ticketImagePlaceholder: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
  },
  placeholderText: {
    color: 'white',
    fontSize: 16,
  },
  textContainer: {
    width: '20%',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1e1e1e',
  },
  ticketText: {
    color: 'white',
    fontSize: 16,
  },
  fullViewButton: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  fullViewButtonText: {
    color: 'black',
    fontSize: 25,
  },
});

export default TicketView;
