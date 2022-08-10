import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './src/screens/LoginScreen';
import { TabsScreen } from './src/screens/TabsScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState(null)

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName={!user ? 'Home' : 'Travels'}>
          <Stack.Screen name="Home" options={{ title: 'Agrosty / Home' }}>
            {(props) => <LoginScreen {...props} setUser={setUser} />}
          </Stack.Screen>
          <Stack.Screen name="Travels" options={{ title: 'Agrosty / Viajes' }} component={TabsScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
