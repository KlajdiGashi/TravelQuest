import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from './Footer'; // Import the Footer component

const MainScreen = () => {
    return (
        <ImageBackground source={require('../BackgroundImage.png')} style={styles.container}>
           
            <View style={styles.Navbar}>
                <Text style={styles.navbarText}>TravelQuest</Text>
            </View>

            
            <View style={styles.TicketView}>
                <Text style={styles.ticketText}>Tickets</Text>
                <TouchableOpacity style={styles.ticketButton}>
                    <Text style={styles.ticketButtonText}>Buy Ticket</Text>
                </TouchableOpacity>
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
    TicketView: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(0,0,0,0.7)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    ticketText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    ticketButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    ticketButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default MainScreen;
