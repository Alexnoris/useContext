import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { empleado, empleadoContext } from './components/empleadoInterface';
import { emp } from './components/info';
import UseContext from './components/UseContext';

export default function App() {

  return (
    <empleadoContext.Provider value={emp}>
      <View style={styles.container}>
        <UseContext />
        <StatusBar style="auto" />
      </View>
    </empleadoContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
