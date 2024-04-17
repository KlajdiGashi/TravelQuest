import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // API here (Very important)

    if (username.trim() === 'admin' || password.trim() === 'password') {
      navigation.navigate('MainView');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundTop} />
      <View style={styles.logoContainer}>
        {/*  logo component  */}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#F5F5F5' }]}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your username"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <View style={[styles.passwordContainer, { backgroundColor: '#F5F5F5' }]}>
          <TextInput
            style={[styles.passwordInput, { backgroundColor: '#F5F5F5' }]}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backgroundTop: {
    position: 'absolute',
    top: -100,
    left: -200,
    right: -200,
    bottom: '60%', 
    backgroundColor: '#005C99', 
    transform: [{ rotateZ:'-30deg' }],
  },
  logoContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: '#F5F5F5',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    fontSize: 18,
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,  
    elevation:5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,  
    elevation:5,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 18,
    
  },
  eyeIcon: {
    position: 'absolute',
    top: 14, 
    right: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#005C99',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#005C99',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#005C99',
    textDecorationLine: 'underline',
    fontSize: 16,
    
  },
});