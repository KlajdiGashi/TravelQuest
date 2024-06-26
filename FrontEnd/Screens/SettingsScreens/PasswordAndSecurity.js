import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/Logo.png';
import BackgroundImage from '../../assets/BackgroundImage.png';
const PasswordAndSecurityScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
  
      <Text style={styles.header}>Password and Security</Text>
      <Text style={styles.header1}>Login & recovery</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('ChangePassword')}>
        <Text style={styles.buttonText}>Change Password</Text>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('ChangeEmail')}>  
        <Text style={styles.buttonText}>Change Email</Text>   
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Two-Factor Authentication</Text>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
      <Text style={styles.header2}>Security checks</Text>
      <TouchableOpacity style={styles.button} >  
        <Text style={styles.buttonText}>Security Check</Text>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >  
        <Text style={styles.buttonText}>Where you're logged in</Text>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  header: {
    fontSize: 24,
    color: 'black',
    marginBottom: 15,
    marginTop:20,
  },
  header1: {
    fontSize: 20,
    color: 'black',
    marginBottom: 15,
    marginTop:25,
  },
  header2:{
    fontSize: 20,
    color: 'white',
    marginBottom: 15,
    marginTop:40,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  arrow: {
    color: 'white',
    fontSize: 18,
  },
});

export default PasswordAndSecurityScreen;
