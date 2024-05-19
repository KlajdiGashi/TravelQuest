import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import MainScreen from './Screens/MainScreen';
import ProfileScreen from './Screens/ProfileScreen';
import PasswordAndSecurityScreen from './Screens/SettingsScreens/PasswordAndSecurity';
import ChangePasswordScreen from './Screens/SettingsScreens/ChangePasswordScreen';
import ChangeEmailScreen from './Screens/SettingsScreens/ChangeEmailScreen';
import PersonalDetailsScreen from './Screens/SettingsScreens/PersonalDetails';
import EditPersonalDetailsScreen from './Screens/SettingsScreens/EditPersonalDetails';
import PaymentMethodScreen from './Screens/SettingsScreens/PaymentMethod';
import AddPaymentScreen from './Screens/SettingsScreens/AddPayment';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{headerShown:false}} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
        />
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{headerShown:false}} 
        />
        <Stack.Screen 
          name="ProfileScreen" 
          component={ProfileScreen} 
          options={{headerShown:false}} 
        />
        <Stack.Screen 
          name="PasswordAndSecurity" 
          component={PasswordAndSecurityScreen} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="ChangePassword" 
          component={ChangePasswordScreen}
          options={{headerShown:false}} 
        />
        <Stack.Screen 
          name="ChangeEmail" 
          component={ChangeEmailScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="PersonalDetails" 
          component={PersonalDetailsScreen}
          options={{headerShown:false}}   
        />
        <Stack.Screen 
          name="EditPersonalDetails" 
          component={EditPersonalDetailsScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="PaymentMethod" 
          component={PaymentMethodScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="AddPayment" 
          component={AddPaymentScreen}
          options={{headerShown:false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
