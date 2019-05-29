import React from 'react';
import { View } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

const SecondLayer = () => {
	const { secondLayerStyle } = styles; 

	return (
		<View style={secondLayerStyle} />
	);
};

const styles = {
	secondLayerStyle: {
		position: 'absolute',
		backgroundColor: '#F45342',
		height: vh(100),
        width: vw(100),
        elevation: 20,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	textStyle: {
		fontSize: 18
	}
};

export default SecondLayer;

