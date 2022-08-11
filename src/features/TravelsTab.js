import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { travelStates } from '../utils/states'
import { stateColors } from '../utils/colors'

export function TravelsTab(props) {

    const  { access_token } = props?.route?.params?.user?.data;
    const [list, setList] = useState([])

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'https://testing-1.api.encamino.ar/transportista/viajes',
            headers: { 
                'Authorization': `Bearer ${access_token}`
            }
        };

        axios(config)
        .then(function (response) {
            setList(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])

    return (
        <ScrollView style={styles.scrollable}>
          {
            list.filter((item) => item.estado !== 'finalizado').map((item) => (
                <View
                    style={[styles.itemCard]}
                    key={item.id}
                >
                    <ListItemHeader item={item}/>
                    <ListItemBody item={item}/>
                </View>
            ))
          }
        </ScrollView>
    );
  }

export function ListItemHeader({item}) {

    const getStatusColor = (status) => stateColors[status] || 'red';
    return (
        <View style={[styles.itemHeader, {backgroundColor: getStatusColor(item.estado)}]}>
            <Text style={styles.text}>{travelStates[item.estado]}</Text>
            <Text style={styles.text}>N° de Transporte {item.codigo}</Text>
        </View>
    );
}

export function ListItemBody({item}) {
    return (
        <View style={styles.listItemBody}>
            <View style={styles.itemBody}>
                <Text style={styles.textDark}>Origen</Text>
                <Text style={styles.textBold}>{item.localidadOrigen.nombre}</Text>
            </View>
            <View style={styles.itemBody}>
                <Text style={styles.textDark}>Destino</Text>
                <Text style={styles.textBold}>{item.localidadDestino.nombre}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollable: {
        backgroundColor: '#eee',
        padding: 10
    },
    itemCard:{ 
        marginTop: 5, 
        marginBottom: 10,
        borderRadius: 10,
        padding: 0,
        backgroundColor: '#fff'
    },
    itemHeader: {
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'space-between',
      padding: 10,
      overflow: 'hidden',
    },
    listItemBody:{
        flexDirection:'row',
        height: 100,
        justifyContent: 'space-between',
    },
    itemBody:{
        justifyContent: 'center',
        padding: 10,
        height: 80,
        width: 160
    },
    shadowProp: {  
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#ddd',  
        shadowOpacity: 0.2,  
        shadowRadius: 10,  
    },
    elevation: {  
        shadowColor: '#000',  
        elevation: 10,  
    },
    text: {
        color: '#fff',
        fontSize: 16
    },
    textDark: {
        color: '#111',
        fontSize: 15
    },
    textBold: {
        color: '#111',
        fontSize: 17,
        fontWeight: 'bold'
    }
})