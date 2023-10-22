import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

export default function SearchPage(props) {
    const [products, setProducts] = useState(props.theproducts);
    const [texto, setTexto] = useState('');

    const filtrar = (texto) => {
        setProducts(props.theproducts.filter(item =>
            item.title.toLowerCase().includes(texto.toLowerCase())
        ));
    }

    return (
        <View style={styles.container} testID='productosresultados'>
            <Text style={styles.catalogo} testID='catalogo'>Catálogo</Text>
            <TextInput
                style={styles.input}
                testID='filtro'
                placeholder='Buscar'
                onChangeText={(text) => { setTexto(text) }}
            />
            <Button
                style={styles.button}
                testID='buscador'
                title='Buscar'
                onPress={() => { filtrar(texto) }}
                color="#f7931a"
            />

            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <View style={styles.itemContainer} testID={'item_' + item.id}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.thumbnail }}
                        />

                        <Text style={styles.itemText} testID={`title_${item.id}`}>
                            {item.title}
                        </Text>

                        <Button
                            title="Ver más"
                            testID={"button_" + item.id}
                            onPress={() =>
                                props.navigation.navigate('Producto', {
                                    title: item.title,
                                    price: item.price,
                                    description: item.description,
                                    stock: item.stock,
                                    thumbnail: item.thumbnail,
                                })
                            }
                            color="#f7931a"
                        />
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#f7f7f7',
    },
    catalogo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#444',
    },
    input: {
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 15,
        fontSize: 16,
        borderRadius: 10,
    },
    button: {
        marginBottom: 65,
    },
    itemContainer: {
        marginTop: 25,
        marginBottom: 25,
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 110,
        height: 110,
        marginBottom: 15,
        borderRadius: 15,
    },
    itemText: {
        fontSize: 20,
        marginBottom: 15,
        color: '#555',
    },
});