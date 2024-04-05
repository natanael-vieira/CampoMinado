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
        <Field opened /> 
        <Field opened nearMines={1} /> 
        <Field opened nearMines={2} /> 
        <Field opened nearMines={3} /> 
        <Field opened nearMines={4} /> 
        <Field opened nearMines={5} /> 
        <Field opened nearMines={6} /> 
        <Field opened nearMines={7} /> 
        <Field opened nearMines={8} /> 
        <Field mined /> 
        <Field mined opened /> 
        <Field mined opened exploded /> 
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