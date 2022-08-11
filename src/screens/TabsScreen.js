import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TravelsTab } from '../features/TravelsTab';
import { SetupTab } from '../features/SetupTab';

const Tab = createBottomTabNavigator();

export function TabsScreen(props) {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Viajes" style={{padding: 10}}>
        {() => <TravelsTab {...props}/>}
      </Tab.Screen>
      <Tab.Screen name="Ajustes" style={{padding: 10}}>
        {() => <SetupTab {...props}/>}
      </Tab.Screen>
    </Tab.Navigator>
  );
}