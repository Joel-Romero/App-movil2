import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) {
    console.log(props.informacion);

    function detalles(nombre: String) {
        Alert.alert("Advertencia", "El personaje se llama " + nombre);
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => detalles(props.informacion.name)}
        >
            <View style={styles.fila}>
                <Image
                    source={{ uri: props.informacion.image }}
                    style={styles.img}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.informacion.name}</Text>
                    <Text style={styles.description}>{props.informacion.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C3E50', // Fondo azul oscuro para la tarjeta
        margin: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,  // Sombra profunda para Android
        padding: 10, // Añadir padding alrededor
    },
    img: {
        height: 120,
        width: 120,
        resizeMode: 'center',  // Ajustar la imagen sin deformarla
        borderRadius: 10,
        marginRight: 15,
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 15,
        flex: 1, // El texto ocupa el espacio restante
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F5F5F5',  // Blanco para el nombre
    },
    description: {
        fontSize: 14,
        color: '#3498DB',  // Azul más claro para la descripción
        marginTop: 5,
        lineHeight: 20,  // Mejor legibilidad para las descripciones
    },
});
