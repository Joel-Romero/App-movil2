import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
                <Image source={require("../assets/imagenes/liebre.png")} style={styles.img}
                 />
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004B87',
      },
      img: {
        width: 100,
        height: 100,
        marginBottom: 20,
      },
      text: {
        fontSize: 35,
        color: '#000',
      },
});
