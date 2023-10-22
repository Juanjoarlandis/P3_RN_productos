import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ProductPage(props) {
    const route = useRoute();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: route.params.thumbnail }}
                testID="imagen"
            />
            <Text style={styles.title} testID="detalle">
                {route.params.title}
            </Text>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Precio:</Text>
                <Text style={styles.price}>{route.params.price}€</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Descripción:</Text>
                <Text style={styles.description}>{route.params.description}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Stock:</Text>
                <Text style={styles.stock}>{route.params.stock}</Text>
            </View>
            <Button
                title="Volver"
                testID="volver"
                onPress={() => props.navigation.goBack()}
                color="#f7931a"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 25,
        borderRadius: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#444',
        textAlign: 'center',
    },
    detailContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#444',
        textAlign: 'center',
    },
    price: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
    },
    description: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
    },
    stock: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
    },
});