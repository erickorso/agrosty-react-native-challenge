import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TravelsTab } from "../features/TravelsTab";
import { SetupTab } from "../features/SetupTab";

const Tab = createBottomTabNavigator();

export function TabsScreen(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Viajes") {
            return (
              <Ionicons
                name={focused ? "bus" : "bus-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Ajustes") {
            return (
              <Ionicons
                name={focused ? "cog" : "cog-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "tomato",
      })}
    >
      <Tab.Screen
        name="Viajes"
        style={{ padding: 10 }}
        options={{ tabBarBadge: 3 }}
      >
        {() => <TravelsTab {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Ajustes" style={{ padding: 10 }}>
        {() => <SetupTab {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
