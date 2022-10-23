import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider } from 'native-base'
import { Home } from './src/screens/Home';
import { AppRoutes } from './src/routes/app.route';


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
      style='auto'
      backgroundColor='transparent'
      translucent />
      
      <AppRoutes />
    </NativeBaseProvider>
  );
}

