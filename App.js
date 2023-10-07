import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './utils/ThemeProvider';
import { ToastProvider } from 'react-native-toast-message';
import { useFonts } from 'expo-font';

import React, { useState } from 'react';
import Navigation from './navigation/Navigation';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

export const app = initializeApp(firebaseConfig);

const App = () => {
  const [dataLoaded] = useFonts({
    'UbuntuRegular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'UbuntuBold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'UbuntuItalic': require('./assets/fonts/Ubuntu-Italic.ttf'),
    'UbuntuBoldItalic': require('./assets/fonts/Ubuntu-BoldItalic.ttf')
  });

  if (!dataLoaded) {
    // You can show a loading screen here if needed
    return null;
  }

  console.log('Font Loaded:', dataLoaded);

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Navigation />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
      container: {
        flex: 1,
        fontFamily: 'UbuntuRegular'
      },
});

export default App;
