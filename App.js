

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import UpdateScreen from './src/screens/UpdateScreen';
import OrderScreen from './src/screens/OrderScreen';
import Summery from './src/screens/Summery';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="update" component={UpdateScreen} />
         <Stack.Screen name="order" component={OrderScreen} />
         <Stack.Screen name="summery" component={Summery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;