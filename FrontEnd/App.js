import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import MainScreen from './Screens/MainScreen';
import TicketDetail from './Screens/TicketDetail';
import TicketView from './Screens/TicketView';
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
        options={{headerShown:false,title:"Main Page"}} 
      />
     <Stack.Screen 
        name="TicketDetail"
        component={TicketDetail}
        options={{headerShown:true,title:"Ticket Detail"}}
      />
     <Stack.Screen
        name="TicketView"
        component={TicketView}
        options={{headerShown:true,title:"Ticket View"}}
      />
      <Stack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{headerShown:true,title:"Profile"}} 
      />
      <Stack.Screen 
        name="PasswordAndSecurity" 
        component={PasswordAndSecurityScreen} 
        options={{headerShown:true,title:""}}
      />
      <Stack.Screen 
        name="ChangePassword" 
        component={ChangePasswordScreen}
        options={{headerShown:true,title:"Change Password"}} 
      />
      <Stack.Screen 
        name="ChangeEmail" 
        component={ChangeEmailScreen}
        options={{headerShown:true,title:"Change Email"}}
      />
      <Stack.Screen 
        name="PersonalDetails" 
        component={PersonalDetailsScreen}
        options={{headerShown:true,title:"Details"}}   
      />
      <Stack.Screen 
        name="EditPersonalDetails" 
        component={EditPersonalDetailsScreen}
        options={{headerShown:true,title:"Edit Personal Details"}}
      />
      <Stack.Screen 
        name="PaymentMethod" 
        component={PaymentMethodScreen}
        options={{headerShown:true,title:""}}
      />
      <Stack.Screen 
        name="AddPayment" 
        component={AddPaymentScreen}
        options={{headerShown:true,title:"Add Payment"}}
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
}
