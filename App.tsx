import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.introduction}>Tamanho da grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
        <Field /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fsfcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  introduction: {}
})