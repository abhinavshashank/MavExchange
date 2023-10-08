import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import { ThemeContext } from '../utils/ThemeProvider';
import theme from '../utils/theme';
import Dashboard from '../screens/Dashboard/Dashboard';
import Chat from '../screens/Chat/Chat';
import AddProductScreen from '../screens/AddProduct/AddProductScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            currentTheme === 'light'
              ? theme.light.colors.backgroundColor
              : theme.dark.colors.backgroundColor,
        },
        headerTintColor:
          currentTheme === 'light'
            ? theme.light.colors.textColor
            : theme.dark.colors.textColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStatusBarHeight: 0,
        headerTransparent: true
      }}
    >


      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen} // Add the ResetPassword screen component as the component for the new screen
        options={{
          title: 'Reset Password',
          headerStatusBarHeight: 64,
          headerTransparent: false,
          headerLeftLabelVisible: false
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard} // Add the ResetPassword screen component as the component for the new screen
        options={{
          title: 'Dashboard',
          headerStatusBarHeight: 64,
          headerTransparent: false,
          headerLeftLabelVisible: false
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat} // Add the Chat screen component as the component for the new screen
        options={{
          title: 'Chat', // Set the title for the Chat screen
        }}
      />
      <Stack.Screen
        name="AddProductScreen"
        component={AddProductScreen} // Add the Chat screen component as the component for the new screen
        options={{
          title: 'AddProductScreen', // Set the title for the Chat screen
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default Navigation;