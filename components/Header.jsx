import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import logo from './images/logo.png';


export default function Header() {
    return (
        <View testID='cabecera' style={styles.container}>
            <Image testID="logo" source={logo} style={styles.logo} />
            <Text testID='mensaje' style={styles.message}>Bienvenido a la tienda de Juan José Arlandis Ocaña</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    message: {
        fontSize: 18,
        color: '#444',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
