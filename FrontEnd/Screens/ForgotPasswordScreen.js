import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [showVerificationCodeView, setShowVerificationCodeView] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [showNewPasswordView, setShowNewPasswordView] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [animationText, setAnimationText] = useState('');
  const [verificationSentText, setVerificationSentText] = useState('');

  useEffect(() => {
    if (showVerificationCodeView) {
      startAnimation('Sending Verification Code...');
      setTimeout(() => {
        setVerificationSentText('Verification code sent.');
      }, 1000);
    }
  }, [showVerificationCodeView]);

  const startAnimation = (text) => {
    const textArray = text.split('');
    let index = 0;
    const interval = setInterval(() => {
      setAnimationText((prevText) => prevText + textArray[index]);
      index++;
      if (index === textArray.length) {
        clearInterval(interval);
      }
    }, 70);
  };

  const handleSendVerificationCode = () => {
    setShowVerificationCodeView(true);
  };

  const handleVerifyCode = () => {
    // API call to verify code (very important)
    setShowNewPasswordView(true);
  };

  const handleResetPassword = () => {
    // API call to reset password (very important)
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require('../BackgroundImage.png')} style={styles.container}>
      {!showVerificationCodeView && !showNewPasswordView && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter your username:</Text>
          <TextInput
            style={[styles.input, { backgroundColor: '#F2F2F2', borderRadius: 10 }]}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
          />
          <TouchableOpacity onPress={handleSendVerificationCode} style={styles.button}>
            <Text style={styles.buttonText}>Send Verification Code</Text>
          </TouchableOpacity>
        </View>
      )}
      {showVerificationCodeView && !showNewPasswordView && (
        <View style={styles.inputContainer}>
          <Text style={styles.animationText}>{animationText}</Text>
          <Text style={styles.verificationSentText}>{verificationSentText}</Text>
          <TextInput
            style={[styles.input, { backgroundColor: '#F2F2F2', borderRadius: 10 }]}
            onChangeText={setVerificationCode}
            value={verificationCode}
            placeholder="Enter Verification Code"
          />
          <TouchableOpacity onPress={handleVerifyCode} style={styles.button}>
            <Text style={styles.buttonText}>Verify Code</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSendVerificationCode} style={styles.resendButton}>
            <Text style={styles.resendButtonText}>Didn't get the code? Send again</Text>
          </TouchableOpacity>
        </View>
      )}
      {showNewPasswordView && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password:</Text>
          <View style={[styles.passwordContainer, { backgroundColor: '#F2F2F2', borderRadius: 10 }]}>
            <TextInput
              style={[styles.passwordInput, { backgroundColor: '#F2F2F2' }]}
              onChangeText={setNewPassword}
              value={newPassword}
              placeholder="Enter new password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Confirm Password:</Text>
          <View style={[styles.passwordContainer, { backgroundColor: '#F2F2F2', borderRadius: 10 }]}>
            <TextInput
              style={[styles.passwordInput, { backgroundColor: '#F2F2F2' }]}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              placeholder="Confirm new password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 50,
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
    height:50,
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
  button: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  resendButton: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
  },
  resendButtonText: {
    color: '#005C99',
    fontSize: 12,
  },
  animationText: {
    fontSize: 18,
    marginBottom: 10,
  },
  verificationSentText: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10,
  },
});
