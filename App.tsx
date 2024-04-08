import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import params from './src/params'
import Field from './src/components/Field'
import MineField from './src/components/MineField'
import { createMinedBoard } from './src/functions'

export default class App extends Component {

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }


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
        <Field flagged /> 
        <Field flagged opened /> 
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