import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../../assets/BackgroundImage.png';

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
    <ImageBackground source={BackgroundImage} style={styles.container}>
        <FlatList
          data={paymentMethods}
          renderItem={renderPaymentMethod}
          keyExtractor={(item) => item.id}
          style={styles.paymentMethodList}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddPayment')}
        >
          <Text style={styles.buttonText}>Add Payment Method</Text>
        </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  innerContainer: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    alignSelf: 'center',
  },
  paymentMethodList: {
    flex: 1,
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
    marginBottom:490,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
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

export default PaymentMethodScreen;
