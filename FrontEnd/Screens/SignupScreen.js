import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    if (name.trim() === '' || number.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
    } else if (!isPasswordValid(password) !== '') {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter and one number or special character.");
    } else {
      navigation.navigate('Home');
    }
  };

  const handelFocus = () => {
    setNumber('+383');
  };

  const handleBlur = () => {
    if (number === '+383') {
      setNumber('');
    }
  };

  const isPasswordValid = (password) => {
    const UpperCaseRegex = /[A-Z]/;
    const NumberRegex = /[0-9]/;
    const characterRegex = /[!@#$%^&*]/;
    return (
      password.length >= 8 &&
      UpperCaseRegex.test(password) &&
      NumberRegex.test(password) ||
      characterRegex.test(password)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundTop} />
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: '#000000' }]}>Name:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
          onChangeText={setName}
          value={name}
          placeholder="Enter your name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: '#000000' }]}>Number:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
          onChangeText={setNumber}
          value={number}
          onFocus={handelFocus}
          onBlur={handleBlur}
          placeholder="Enter your number"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: '#000000' }]}>Password:</Text>
        <View style={[styles.passwordContainer, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}>
          <TextInput
            style={[styles.passwordInput, { backgroundColor: '#F5F5F5' }]}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: '#F5F5F5' }]}>Confirm Password:</Text>
        <View style={[styles.passwordContainer, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}>
          <TextInput
            style={[styles.passwordInput, { backgroundColor: '#F5F5F5' }]}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm your password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleSignup} style={[styles.signupButton, { borderRadius: 10 }]}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backgroundTop: {
    position: 'absolute',
    top: -120,
    left: -280,
    right: -200,
    bottom: '60%', 
    backgroundColor: '#F5F5F5', 
    transform: [{ rotateZ:'-30deg' }],
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  eyeIcon: {
    padding: 10,
  },
  signupButton: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
  },
});
