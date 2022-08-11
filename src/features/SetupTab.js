import React from 'react'
import { Text, View, Pressable , StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { initialState } from '../../App' 

export function SetupTab({navigation, setUser}) {

    const handleLogout = () => {
      setUser(initialState)
      navigation.navigate('Home')
    }
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Ionicons name="exit-outline" size={24} color="black" />
          <Pressable style={styles.button} onPress={handleLogout}>
            <Text style={styles.text}>Cerrar sesión</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <AntDesign name="android" size={24} color="black" />
          <Text style={styles.text}>Version de la App 1.0</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 40
    },
    row: {
      flexDirection:'row',
      marginBottom: 10,
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 5
    },
    text: {
      marginLeft: 10
    }
  });