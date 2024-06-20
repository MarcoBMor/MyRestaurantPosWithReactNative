import { StyleSheet } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import React from 'react';

export default function App() {
  return (
    <AppNavigation />
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
