import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function MeuComponente() {
    return(
        <View style={styles.card}>

            <View>
            <Text Style={styles.cardTitle}>Parabéns</Text>
            <Text Style={styles.cardSubtitle}>Essa é minha primeira aplicação React Native</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    card: {
        marginTop: 30,
      color: '#fff',
      backgroundColor: 'white',
      minWidth: 200,
      minHeight: 50,
      padding: 10,
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardTitle: {
      marginTop: 30,
      color: '#fff',
      backgroundColor: 'green',
      minWidth: 200,
      minHeight: 50,
      padding: 10,
      borderRadius: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }
  });
