import React from 'react';
import { SafeAreaView } from "react-native";
import MainComponent from './Main.js';

export default function App() {

  return (
    <SafeAreaView style={{  
      width: '100%',
      height: '100%'
    }}>
     <MainComponent></MainComponent> 
    </SafeAreaView>
  );
}
