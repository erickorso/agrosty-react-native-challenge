import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import axios from 'axios';
const Tab = createBottomTabNavigator();

export function TravelsTab(props) {
    const { id, nombre, rol, tyc_aceptado_el } = props?.route?.params?.user?.data?.usuario;
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
        <ScrollView>
          {
            list.filter((item) => item.estado !== 'despachado').map((item) => (
                <View
                    style={styleColor('blue').itemHeader}
                    key={item.id}
                >
                    <ListItemHeader item={item}/>
                    <Text>{item.id}</Text>
                </View>
            ))
          }
          <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title="Ajustes"
            onPress={() => navigation.navigate('Setup')}
          />
        </ScrollView>
    );
  }

export function ListItemHeader({item}) {
    return (
        <View style={styles.itemHeader}>
            <Text>{item.estado}</Text>
            <Text>{item.codigo}</Text>
        </View>
    );
}
  
export function SetupScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ajustes Screen</Text>
        <Button
          title="Salir"
          onPress={() => navigation.navigate('Home', { /* params go here */ })}
        />
        <Button
            title="Volver"
            onPress={() => navigation.goBack()}
          />
      </View>
    );
  }

export function TabsScreen(props) {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {() => <TravelsTab {...props}/>}
      </Tab.Screen>
      <Tab.Screen name="Settings" component={SetupScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    itemHeader: {
      borderColor: 'red',
      borderWidth: 2,
      borderStyle: 'solid',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'space-between'
    }
  })

  const styleColor = (color) => StyleSheet.create({
    itemHeader: {
      borderColor: color,
      borderWidth: 3
    }
  })