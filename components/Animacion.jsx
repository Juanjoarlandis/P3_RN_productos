import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

export default function Animacion() {
    return (
        <View style={styles.container}>
            <ActivityIndicator testID='loading' size="large" color="#f7931a" />
            <Text style={styles.text}>Cargando...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
    },
    image: {
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#444',
        fontWeight: 'bold',
    }
});
