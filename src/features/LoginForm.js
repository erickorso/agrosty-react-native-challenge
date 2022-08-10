import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { TextInput, HelperText } from 'react-native-paper'
import { BtnRounded } from '../components/BtnRounded'
import { TravelsTab } from '../screens/TabsScreen';

import { userPropsMock } from '../mocks/userProps'

const initialState = {
  username: '',       
  password: '',       
  errors: null,         
  isAuthorized: false,
  isLoading: false,
  userData: null 
};

export const LoginForm = ({navigation, addUser}) => {

  const [user, setUser] = useState(initialState)

  const usernameChange = (username) => {
    setUser((user) => ({...user, username}))
  }

  const passChange = (password) => {
    setUser((user) => ({...user, password}))
  }

  const handleSend = () => {
    const {username, password} = user
    if(username && password){
      sendLogin(
        JSON.stringify({dni: username, password})
      )
    }else{
      setUser((user) => ({...user, errors: {message: 'Revisa los campos, no pueden estar vacios!'}}))
    }
  }

  const sendLogin = (data) => {
    setUser((user) => ({...user, isLoading: true}))    
    var config = {
      method: 'post',
      url: 'https://testing-1.api.encamino.ar/auth/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data
    };
    
    axios(config)
    .then(function (response) {
      addUser(response)
      setUser((user) => ({...user, isLoading: false, isAuthorized: true, errors: null, userData: response}))
    })
    .catch(function (error) {
      setUser((user) => ({...user, isLoading: false, isAuthorized: false, errors: error.message}))
    });

  }

  useEffect(() => {
    if(user.isAuthorized){
      navigation.navigate('Travels', { user: user.userData })
    }
  }, [user])
  

  return (
      <View style={styles.container}>
        <HelperText type="error" visible={user?.errors}>
          Revisa los datos!
        </HelperText>
        <TextInput 
          style={styles.textInput}
          label={'Username'}
          value={user.username}
          onChangeText={usernameChange}
        />
        <TextInput 
          style={styles.textInput}
          label={'Password'}
          value={user.password}
          onChangeText={passChange}
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <BtnRounded
            title={user.isLoading ? 'Loading' : 'Ingresar'}
            size={250}
            onPress={() => handleSend(user)}
          />
        </View>
        <View>
          <TravelsTab {...userPropsMock}/>
        </View>
      </View>
)
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'column',
    justifyContent: 'center',
    alingItems: 'center',
  },
  textInput: {
    flex: 7,
    marginRight: 5,
    minWidth: 250,
    maxHeight: 60,
    marginBottom: 15
  },
  button: {
    display: 'flex',
    alignItems: 'center',
  }
})