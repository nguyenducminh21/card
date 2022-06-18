import { View, Text } from 'react-native'
import React from 'react'
import Button from './Button'

const Card = ({ title, content, name, onPress }) => {
	return (
		<View>
			<Text>{title}</Text>
			<Text>{content}</Text>
			<Button name={name} onPress={onPress} />
		</View>
	)
}

export default Card