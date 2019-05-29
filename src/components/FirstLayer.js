import React from 'react';
import { View } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

const FirstLayer = () => {
	const { firstLayerStyle } = styles; 

	return (
		<View style={firstLayerStyle} />
	);
};

const styles = {
	firstLayerStyle: {
		position: 'absolute',
		backgroundColor: '#42F4AD',
		height: vh(100),
        width: vw(100),  
        // zIndex: 1,
        elevation: 10,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	textStyle: {
		fontSize: 18
	}
};

export default FirstLayer;

