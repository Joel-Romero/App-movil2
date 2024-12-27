import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Pagina4Screee() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  useEffect(() => {
    if (numero1 < 0) {
      Alert.alert('Error', 'El número no puede ser menor a 0');
      setNumero1(0);
    }
    if (numero2 < 0) {
      Alert.alert('Error', 'El número no puede ser menor a 0');
      setNumero2(0);
    }
  }, [numero1, numero2]);

  // Función para aumentar el primer número
  function aumentarNumero1() {
    setNumero1(numero1 + 1);
  }

  // Función para aumentar el segundo número
  function aumentarNumero2() {
    setNumero2(numero2 + 1);
  }

  // Función para disminuir el primer número
  function disminuirNumero1() {
    setNumero1(numero1 - 1);
  }

  // Función para disminuir el segundo número
  function disminuirNumero2() {
    setNumero2(numero2 - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        <Button
          title="<="
          onPress={disminuirNumero1}
          color="#0f6ba3"
        />
        <Text style={styles.txt}>{numero1}</Text>
        <Button
          title="=>"
          onPress={aumentarNumero1}
          color="#0f6ba3"
        />
      </View>

      <View style={styles.fila}>
        <Button
          title="<="
          onPress={disminuirNumero2}
          color="#0f6ba3"
        />
        <Text style={styles.txt}>{numero2}</Text>
        <Button
          title="=>"
          onPress={aumentarNumero2}
          color="#0f6ba3"
        />
      </View>

      <Text style={styles.txt}>Suma: {numero1 + numero2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#021245',
    padding: 20,
  },
  txt: {
    fontSize: 30,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  actionContainer: {
    marginTop: 60,
    width: '50%',
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
  },
});
