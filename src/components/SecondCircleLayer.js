import React from 'react';
import { TouchableOpacity } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

const SecondCircleLayer = () => { 
	const { secondCircleLayerStyle } = styles;

	return (
		<TouchableOpacity style={secondCircleLayerStyle} />
	);
};


const styles = {
	secondCircleLayerStyle: {
		position: 'absolute',
		backgroundColor: '#41F4F1',
		borderRadius: vw(30) / 2,
		height: vw(30),
        width: vw(30),
        marginHorizontal: vw(35),
        marginVertical: (vh(100) - vw(30)) / 2,
        elevation: 40,
        // zIndex: 10,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	textStyle: {
		fontSize: 18
	}
};

export default SecondCircleLayer;

