import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Animacion from './Animacion';
import SearchPage from './SearchPage';
import ProductPage from './ProductPage';
import Header from './Header';
import CONFIG from './config/config';
import { mockdata } from './constants/products';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import logo from './images/logo.png';


const Stack = createStackNavigator();

export default function App() {


    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(mockdata.products);
    const [error, setError] = useState(null);

    const loadProducts = async () => {
        try {
            if (!CONFIG.use_server) {
                setProducts(mockdata.products);
                return;
            }

            const response = await fetch(CONFIG.server_url);

            const { products } = await response.json();

            if (!products) {
                throw Error('Products not found in the response');
            }

            setProducts(products);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.toString());
        }
    };

    useEffect(() => {
        loadProducts();
        setTimeout(() => {
            setLoading(false);
        }, CONFIG.loading_timeout_ms);
    }, []);



    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    if (loading) {
        return (


            <Animacion loading={loading} />

        );
    }

    if (products) {
        return (
            <SafeAreaProvider>
                <Header logo={'./images/logo.png'} />
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Search">
                            {props => <SearchPage {...props} theproducts={products.slice(0, CONFIG.num_items)} />}
                        </Stack.Screen>
                        <Stack.Screen name="Producto" component={ProductPage} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
});