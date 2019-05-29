import React from 'react';
import { TouchableOpacity } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

const FirstCircleLayer = ({ onPress }) => {
	const { firstCircleLayerStyle } = styles; 

	return (
		<TouchableOpacity onPress={onPress} style={firstCircleLayerStyle} />
	);
};

const styles = {
	firstCircleLayerStyle: {
		// position: 'absolute',
		backgroundColor: '#4165F4',
		borderRadius: vw(40) / 2,
		height: vw(40),
        width: vw(40),
        marginHorizontal: vw(30),
        marginVertical: (vh(100) - vw(40)) / 2,
        // zIndex: 10,
        elevation: 30,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	textStyle: {
		fontSize: 18
	}
};

export default FirstCircleLayer;

