import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Pagina6Screen() {
  const [Kelvin, setKelvin] = useState(0);
  const [celcius, setCelcius] = useState(0);
  const [Farenheit, setFarenheit] = useState(0);

  useEffect(() => {
    if (celcius > 100) {
      Alert.alert('Mensaje', 'Temperatura demasiado alta');
    }
  }, [celcius]);

  function calcular() {
    setCelcius(Kelvin - 273.15);
    setFarenheit(((Kelvin - 273.15) * 9) / 5 + 32);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convertir Temperatura</Text>

      <TextInput
        placeholder="Ingrese temperatura en Kelvin"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(texto) => setKelvin(+texto)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calcular" color="#000" onPress={calcular} />
      </View>

      <View style={styles.linea} />

      <Text style={styles.resultText}>Temperatura en Celsius: {celcius.toFixed(2)}</Text>
      <Text style={styles.resultText}>Temperatura en Fahrenheit: {Farenheit.toFixed(2)}</Text>
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    padding: 15,
    fontSize: 18,
    backgroundColor: '#fff', 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonContainer: {
    width: '80%',
    backgroundColor: '#ff6347', 
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  linea: {
    width: '100%',
    height: 1,
    backgroundColor: '#000', 
    marginVertical: 20,
  },
  resultText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff', 
    marginTop: 10,
  },
});
