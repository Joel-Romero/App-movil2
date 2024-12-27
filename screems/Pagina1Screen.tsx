import { Alert, ImageBackground, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function Pagina1Screen({props}: any) {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [ciudad, setCiudad] = useState('');

  function datosAlert() {
    if (nombre && edad && ciudad) {
      Alert.alert(
        "Mensaje del usuario:", 
        `Nombre:${nombre}
        Ciudad: ${ciudad} 
        Edad: ${edad} años`
      );
      
      setNombre(""); 
      setEdad(""); 
      setCiudad("");
    } else {
      Alert.alert('Advertencia', 'Por favor, complete todos los campos.');
    }
  }

  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/736x/52/7f/2d/527f2d448ecde57ae06129a3f1459e79.jpg" }}
      style={styles.img}
    >
      <View style={styles.container}>
        <TextInput 
          placeholder='Ingresar Nombre'
          placeholderTextColor={"white"} 
          style={styles.input}
          onChangeText={(texto) => setNombre(texto)}
          value={nombre}
        />

        <TextInput 
          placeholder='Ingresar edad'
          placeholderTextColor={"white"} 
          style={styles.input} 
          keyboardType='numeric' 
          onChangeText={(texto) => setEdad(texto)}
          value={edad}
        />

        <TextInput 
          placeholder='Ingresar ciudad'
          placeholderTextColor={"white"} 
          style={styles.input} 
          onChangeText={(texto) => setCiudad(texto)}
          value={ciudad}
        />

        <Button
          title="Aceptar"
          onPress={datosAlert} 
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    marginBottom: 15,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 5,
  },
});
