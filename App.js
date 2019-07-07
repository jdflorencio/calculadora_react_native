import React, { Component }from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Display from './Components/Display'
import Operadores from './Components/Operadores'
import TecladoNumerico from './Components/TecladoNumerico'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: '',
      result: ''
    }
  }
  
  handleOp(op) {
    console.log('operador =>', op)
    if (op === 'C') {
      this.setState({
        display: '',
        result: ''
      })
    } else if (op === '=') {
      this.setState({
         display: this.state.result,
        result: ''
      })
    } else {
      // const display = this.state.display + op
      // let result = this.state.result
      const display =  op
      let result = op
      try{        
      //   let fixedOperation = display.split('x').join('*')
      //   fixedOperation = fixedOperation.split('÷').join('/')
      //   fixedOperation = fixedOperation.split(',').join('.')
      //   result = new String(eval(fixedOperation)).toString()
        console.log('STATE AQUI: ',this.state)
      }catch(e){}
      this.setState({
        display,
        result
      })
    }
  }

  render() {
  return (    
    <View style={styles.container}>
    <Display displayView={this.state} />   
      <View style={styles.buttons}>      
        <TecladoNumerico handleKeyboard={this.handleOp}/>
        <Operadores handleKeyboard={this.handleOp}/>        
      </View>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttons: {
    flex: 5,
    flexDirection: 'row'
  }
})

export default App;