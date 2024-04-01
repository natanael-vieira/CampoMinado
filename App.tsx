import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import params from './src/params'

export default class App extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.introduction}>Tamanho da grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
      </View>
    )
  }
}