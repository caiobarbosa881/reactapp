import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEJA BEM VINDO</Text>
      <ScrollView>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#717B8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 100,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  card: {
    color: '#fff',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});