import { useEffect, useState } from "react"; 
import { FlatList, Text, View, StyleSheet } from "react-native"; 
import Tarjeta3 from "../components/Tarjeta3"; 

export default function Pagina7Screen() { 
    const [datos2, setDatos2] = useState([]); 

    useEffect(() => { 
        async function leer2() { 
           
                const resp = await fetch('https://randomuser.me/api/?results=20'); 
                const json = await resp.json(); 
                setDatos2(json.results);           
        } 

        leer2(); 
    }, []); 

    return ( 
        <View> 
            <Text>Usuarios:</Text>
            <FlatList 
                data={datos2} 
                renderItem={({ item }) => <Tarjeta3 datos={item} />} 
                keyExtractor={(item, index) => index.toString()} 
            /> 
        </View> 
    ); 
}

const styles = StyleSheet.create({});
