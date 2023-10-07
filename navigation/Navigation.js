import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import { ThemeContext } from '../utils/ThemeProvider';
import theme from '../utils/theme';
import Dashboard from '../screens/Dashboard/Dashboard';

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
        {/* Add more screens and their configurations here */}
      </Stack.Navigator>
    );
  };

const Navigation = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default Navigation;