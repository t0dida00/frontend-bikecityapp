import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {AppProvider} from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import StationScreen from './screens/StationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return (
    <AppProvider>
      {/* <StatusBar backgroundColor="#06bcee" /> */}
      <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Station" component={StationScreen} options={{
              gestureEnabled: false,
             // Disables the back gesture
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
};

export default App;