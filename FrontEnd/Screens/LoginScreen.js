import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // API here (Very important)

    if (username.trim() === 'admin' || password.trim() === 'password') {
      navigation.navigate('MainScreen');
      // Added only for testing to see if the navigation works properly 
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
    <ImageBackground source={require('../assets/BackgroundImage.png')} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={ require('../assets/Logo.png') }
          style={{ width: 200, height: 100, borderRadius: 10, bottom: 60, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 2, shadowRadius: 4.84, elevation: 5 }}
          resizeMode="contain"
        />
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
          <Text style={styles.SignUpText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
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
    shadowRadius:4.84,
    elevation: 5,
  },
  passwordContainer: {
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
  loginButton: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50
  },
  eyeIcon: {
    position: 'absolute',
    top: 13,
    right: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#F5F5F5',
    textDecorationLine: 'underline',
    fontSize: 16,

  },
  SignUpText: {
    color: '#F5F5F5',
    textDecorationLine: 'underline',
    fontSize: 16,

  },
});
