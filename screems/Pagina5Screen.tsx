import { useEffect, useState } from "react"; 
import { FlatList, Text, View, StyleSheet } from "react-native"; 
import Tarjeta2 from "../components/Tarjeta2";
 
export default function Pagina5Screen() { 
    const [datos, setdatos] = useState([]); 
 
    useEffect(() => { 
        async function leer() { 
            const resp = await fetch('https://api.sampleapis.com/futurama/characters'); 
            const json = await resp.json(); 
            setdatos(json); 
            console.log(datos); 
        } 
 
        leer(); 
    }, []); 
 
    return ( 
        <Text> 
            
            <FlatList 
                data={datos} 
                renderItem={({ item }) => <Tarjeta2 datos={item} />} 
            /> 
        </Text> 
    ); 
} 
 
const styles = StyleSheet.create({})