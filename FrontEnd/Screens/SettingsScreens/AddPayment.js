import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../../assets/BackgroundImage.png';
import { UserContext } from '../UserContext';

const AddPaymentScreen = () => {
  const navigation = useNavigation();
  const [paymentType, setPaymentType] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleAddPayment = () => {
    console.log('Adding payment method:', paymentType, cardNumber);
    // After adding, navigate back to the PaymentMethodScreen
    navigation.goBack();
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Payment Type:</Text>
          <TextInput
            style={styles.input}
            placeholder="Credit Card, PayPal, etc."
            value={paymentType}
            onChangeText={setPaymentType}
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter card number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddPayment}>
          <Text style={styles.buttonText}>Add Payment Method</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
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
  addButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default AddPaymentScreen;
