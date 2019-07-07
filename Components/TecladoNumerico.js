import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

class TecladoNumerico extends React.Component{
	handleOp(op){
		this.props.handleKeyboard(op)
	}
	render(){
		const col1Button = [
			['7','8','9'],
			['4','5','6'],
			['1','2','3'],
			[',','0','=']
		]
		return(
			<View style={styles.col1}>
				{col1Button.map( (line, ind) => 
					<View key={ind} style={styles.line}>
						{line.map(op => <TouchableOpacity key = {op} style={styles.btn} onPress={() => this.handleOp(op)}>
					<Text style={styles.btnText}>{op}</Text> 
				</TouchableOpacity>)}            
				</View>)}       
			</View>
		)
	}
}
const styles = StyleSheet.create({
  col1: {
    flex: 3,
    backgroundColor: '#000000'
  },
  line: {
    flex: 1,
    flexDirection: 'row'
  },
  btn: {
    flex: 1,
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center', 
    fontSize: 50, 
    color: '#fff'

  }
})

export default TecladoNumerico