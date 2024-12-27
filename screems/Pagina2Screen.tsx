import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function Pagina2Screen() {
  const usuarios = [
    {
      nombre: 'Joel Romero',
      edad:20
    }, 
    {
      nombre: 'Sofia Rosero',
      edad:23
    },
    {
      nombre:'Emily Yanez',
      edad:21
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>Usuarios</Text>
      <FlatList
      data = {usuarios}
      renderItem={ ( {item} ) =>
        <View>
      <Text>{item.nombre}</Text> 
      <Text>{item.edad}</Text> 
      </View>
    }

      />
    </View>
  )
}

const styles = StyleSheet.create({})