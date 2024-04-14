import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';

const Footer = () => {
  const handleSocialMedia = (platform) => {
    let url = '';

    switch (platform) {
      case 'instagram':
        url = 'https://www.instagram.com/instagram/';
        break;
      case 'facebook':
        url = 'https://www.facebook.com/facebook/';
        break;

      default:
        break;
    }

    if (url !== '') {
      Linking.openURL(url).catch((err) => console.error('Failed to open URL: ', err));
    }
  };

  const handleCall = (phoneNumber) => {
    phoneNumber = '+38345330890';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = () => {
    Linking.openURL('mailto:travelquestagency');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => handleSocialMedia('instagram')} style={styles.footerIcon}>
        <Ionicons name="logo-instagram" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSocialMedia('facebook')} style={styles.footerIcon}>
        <Ionicons name="logo-facebook" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCall('+38345330890')} style={styles.footerIcon}>
        <Ionicons name="call" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleEmail()} style={styles.footerIcon}>
        <Ionicons name="mail" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,
  },
  footerIcon: {
    padding: 10,
  },
});

export default Footer;
