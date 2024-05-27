import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const registerUser = async (user_data) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user_data),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('An error occurred. Please try again later.');
    }
  };

  const handleSignup = async () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
    } else if (!isPasswordValid(password)) {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter and one number or special character.");
    } else {
      const user_data = {
        username: username,
        fullname: name,
        email: email,
        password: password,
        confirm_password: confirmPassword,
      };
      
      try {
        let data = await registerUser(user_data);
        console.log(data);
        if (data.guid) { // or check another field to confirm successful registration
          alert('Signup successful!');
          navigation.navigate('MainScreen');
        } else {
          alert('Signup failed: ' + JSON.stringify(data));
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const isPasswordValid = (password) => {
    const UpperCaseRegex = /[A-Z]/;
    const NumberRegex = /[0-9]/;
    const characterRegex = /[!@#$%^&*]/;
    return (
      password.length >= 8 &&
      UpperCaseRegex.test(password) &&
      (NumberRegex.test(password) || characterRegex.test(password))
    );
  };

  return (
    <ImageBackground source={require('../assets/BackgroundImage.png')} style={styles.container}>
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
        <Text style={[styles.label, { color: '#000000' }]}>Username:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your username"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: '#000000' }]}>Email:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
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
        <Text style={[styles.label, { color: '#000000' }]}>Confirm Password:</Text>
        <View style={[styles.passwordContainer, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}>
          <TextInput
            style={[styles.passwordInput, { backgroundColor: '#F5F5F5' }]}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm your password"
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
            <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleSignup} style={[styles.signupButton, { borderRadius: 10 }]}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  passwordContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4.84,
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
  },
});
