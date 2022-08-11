import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './src/screens/LoginScreen';
import { TabsScreen } from './src/screens/TabsScreen';

const Stack = createNativeStackNavigator();

export const initialState = {
  username: '',       
  password: '',       
  errors: null,         
  isAuthorized: false,
  isLoading: false,
  userData: null,
};

export default function App() {

  const [user, setUser] = useState(initialState)

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={!user?.isAuthorized ? 'Home' : 'Travels'}>
          <Stack.Screen name="Home" options={{ title: 'Agrosty / Login' }}>
            {(props) => <LoginScreen {...props} setUser={setUser} user={user}/>}
          </Stack.Screen>
          <Stack.Screen name="Travels" options={{ title: 'Agrosty' }}>
            {(props) => <TabsScreen {...props} setUser={setUser} user={user}/>}
          </Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
