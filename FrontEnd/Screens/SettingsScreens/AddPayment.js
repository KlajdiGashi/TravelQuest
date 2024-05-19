import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddPaymentScreen = () => {
  const navigation = useNavigation();
  const [paymentType, setPaymentType] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleAddPayment = () => {
    // Implement your logic to add the payment method to the database
    // This is just a placeholder, you should replace it with actual logic
    console.log('Adding payment method:', paymentType, cardNumber);
    // After adding, navigate back to the PaymentMethodScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Payment Method</Text>
      <TextInput
        style={styles.input}
        placeholder="Payment Type (e.g., Credit Card, PayPal)"
        value={paymentType}
        onChangeText={setPaymentType}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddPayment}>
        <Text style={styles.buttonText}>Add Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: 'white',
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddPaymentScreen;
