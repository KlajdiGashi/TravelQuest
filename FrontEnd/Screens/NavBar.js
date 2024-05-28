import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavBar = () => {
    return (
        <View style={styles.container}>
             <TouchableOpacity style={styles.iconButton}>
                <Icon name="home" size={24} color="#000" />
                <Text style={styles.iconText}>Home</Text>
            </TouchableOpacity>
            <Text style={styles.title}>TravelQuest</Text>
            <View style={styles.rightIcons}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="search" size={24} color="#000" />
                    <Text style={styles.iconText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="person" size={24} color="#000" />
                    <Text style={styles.iconText}>Profile</Text>
                </TouchableOpacity>
            </View>
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
    rightIcons: {
        flexDirection: 'row',
    },
    iconButton: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    iconText: {
        fontSize: 12,
    },
});
export default NavBar;