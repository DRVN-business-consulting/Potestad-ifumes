import React from 'react';
import { SafeAreaView, Text } from "react-native";
import MainComponent from './Main.js';
import ThemeContextProvider from './src/context/ThemeContext.js';

export default function App() {
  return (
    <SafeAreaView style={{  
      width: '100%',
      height: '100%'
    }}>
      <ThemeContextProvider>
        <MainComponent/>
     </ThemeContextProvider>
    </SafeAreaView>
  );
}
