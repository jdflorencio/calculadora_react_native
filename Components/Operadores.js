import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

class Operadores extends React.Component {
  state = {
    newOp: ''
  }
  handleOp = op => {

    this.setState({
      newOp: op
    })
    // console.log(this.state)
    this.props.handleKeyboard(this.state.newOp)
 
  }

	render() {
		const col2Button = ['C', '÷','x', '-', '+']
		return (
    <View style={styles.col2}>
    
			{col2Button.map(op => <TouchableOpacity key = {op} style={styles.btn} onPress={() => this.handleOp(op)}>
				<Text style={styles.btnText}>{op}</Text> 
      </TouchableOpacity>)}         
      
		</View>
		)
	}
}

const styles = StyleSheet.create({

  col2: {
    flex: 1,
    backgroundColor: '#000019'
  },
  btn: {
    flex: 1,
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center', 
    fontSize: 50, 
    color: '#0080ff'

  }
})
export default Operadores