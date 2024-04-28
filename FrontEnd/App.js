import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import MainScreen from './Screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" 
          component={LoginScreen} 
          options={{headerShown:false}}/>
        <Stack.Screen name="Signup" 
          component={SignupScreen}
         />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} />
        <Stack.Screen name="MainScreen"
          component={MainScreen}
          options={{headerShown:false}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
