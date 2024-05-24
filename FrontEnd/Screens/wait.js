import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const WaitScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Please wait while we're logging you in...</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    message: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default WaitScreen;
