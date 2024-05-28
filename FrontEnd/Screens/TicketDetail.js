import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import BackgroundImage from '../assets/BackgroundImage.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TicketDetail = ({ route }) => {
  const { ticket } = route.params;

  return (
    
    <View style={styles.container}>
      <SharedElement id={`item.${ticket.id}.image`}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      </SharedElement>
      <SharedElement id={`item.${ticket.id}.text`}>
        <Text style={styles.title}>{ticket.location}</Text>
      </SharedElement>
      <Text style={styles.details}>{ticket.details}</Text>
    
    </View>
   
  );
};

TicketDetail.sharedElements = (route) => {
  const { ticket } = route.params;
  return [
    { id: `item.${ticket.id}.image` },
    { id: `item.${ticket.id}.text` },
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    marginBottom: 20,
    marginTop:10,
    borderRadius:19
  },
  placeholderText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
    marginTop:10
  },
  details: {
    fontSize: 16,
    color: 'black',
    
  },
});

export default TicketDetail;
