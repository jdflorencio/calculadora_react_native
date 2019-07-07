import React, { Component } from 'react'
import { StyleSheet, Text} from 'react-native';

const Display = ({displayView}) => [
  <Text  key="display" style={styles.display}>{displayView.display}</Text>,
  <Text  key="calc" style={styles.result}>{displayView.result}</Text>   
]

const styles = StyleSheet.create({
  display: {
    flex: 1, 
    backgroundColor: '#EFEFEF',
    fontSize: 60,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  }, 
  result: {
    flex: 0.4,
    backgroundColor: '#EFEFEF',
    fontSize: 35,
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10
  },
})

export default Display