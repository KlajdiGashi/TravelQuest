  import React, { useState } from 'react';
  import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';

  export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
      // API here (Very important)

      if(username.trim()=== 'admin' || password.trim() === 'password'){
        navigation.navigate('MainView');
      } else {
        alert("Invalid username or password. Please try again.")
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
        {/* Logo Placeholder */}
        <View style={styles.logoContainer}>
          {/* Add your logo component here */}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your username"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
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
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
         <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignup} style={styles.buttonText}>
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
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
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
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#44B4F3',
      borderRadius: 5,
      paddingHorizontal: 10,
      color: 'black',
      backgroundColor: 'white',
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#44B4F3',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    passwordInput: {
      flex: 1,
      height: 40,
      color: 'black',
      backgroundColor: 'white',
    },
    eyeIcon: {
      padding: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
    },
    buttonText: {
      color: '#005C99',
      textDecorationLine: 'underline',
      fontSize: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 10,
    },
    loginButton: {
      backgroundColor: '#005C99',
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
      textDecorationLine:'none'
    },
    forgotPasswordText: {
      color: '#005C99',
      textDecorationLine: 'underline',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 20,
    },
    footerIcon: {
      padding: 10,
    },
    footerText: {
      color: 'black',
      fontSize: 16,
    },
  });
