import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ onPress, name }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text>{name}</Text>
		</TouchableOpacity>
	)
}

export default Button