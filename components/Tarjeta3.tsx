import { Button, Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta3(props: any) {
    const [visible2, setVisible2] = useState(false);

    const { first, last } = props.datos.name; 
    const imageUrl = props.datos.picture.large;

    return (
        <TouchableOpacity onPress={() => setVisible2(true)}>
            <Text>{first} {last}</Text> 

            <Modal visible={visible2}>
                <View style={styles.modal}>
                    <Image style={styles.img} source={{ uri: imageUrl }} />
                    <Text style={styles.text}>{first} {last}</Text>
                    <Button title="Regresar" onPress={() => setVisible2(false)} />
                </View>
            </Modal>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#0a9986',
        flex: 1
    },
    img:{
        width:250,
        height:400,
        resizeMode:'contain'
    },
    text:{
        fontSize:28
    }
});
