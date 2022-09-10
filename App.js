import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style={"dark"} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"All Places"} component={AllPlaces} />
          <Stack.Screen name={"Add Place"} component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

