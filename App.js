import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Screens/Home";
const Stack = createNativeStackNavigator(); ///For mutiple screen

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
      {/* Multiple screen in a app */}
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  );
}


 