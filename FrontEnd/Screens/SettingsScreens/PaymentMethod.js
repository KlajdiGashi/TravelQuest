import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


  const PaymentMethodScreen = () => {
  const navigation = useNavigation();
  const [paymentMethods, setPaymentMethods] = useState([
    { id: '1', type: 'Credit Card', last4Digits: '1234' },
    { id: '2', type: 'Debit Card', last4Digits: '5678' },
    { id: '3', type: 'PayPal', last4Digits: '8765' },
  ]);

  const renderPaymentMethod = ({ item }) => (
    <TouchableOpacity style={styles.paymentMethodItem}>
      <Text style={styles.paymentMethodText}>{item.type}</Text>
      <Text style={styles.paymentMethodText}>**** {item.last4Digits}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Methods</Text>
      <FlatList
        data={paymentMethods}
        renderItem={renderPaymentMethod}
        keyExtractor={(item) => item.id}
        style={styles.paymentMethodList}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPayment')}>
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
  paymentMethodList: {
    flex: 1,
    width: '100%',
  },
  paymentMethodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  paymentMethodText: {
    color: 'white',
    fontSize: 18,
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

export default PaymentMethodScreen;
