import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from './Footer'; 

const MainScreen = () => {
    return (
        <ImageBackground source={require('../BackgroundImage.png')} style={styles.container}>
           
            <View style={styles.Navbar}>
                <Text style={styles.navbarText}>TravelQuest</Text>
            </View>
            <Footer /> {}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    Navbar: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    navbarText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    
});

export default MainScreen;
