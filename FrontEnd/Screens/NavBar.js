import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TravelQuest</Text>
            {/* Whoever will be working on this add the nav bar icons here please! */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default NavBar;