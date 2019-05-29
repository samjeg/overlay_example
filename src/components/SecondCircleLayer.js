import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

class SecondCircleLayer extends Component { 

	render() {
		return (
			<TouchableOpacity style={styles.secondCircleLayerStyle} />
		);
	}
}

const styles = {
	secondCircleLayerStyle: {
		position: 'absolute',
		backgroundColor: '#41F4F1',
		borderRadius: vw(30) / 2,
		height: vw(30),
        width: vw(30),
        marginHorizontal: vw(35),
        marginVertical: (vh(100) - vw(30)) / 2,
        // zIndex: 10,
        elevation: 40,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	textStyle: {
		fontSize: 18
	}
};

export default SecondCircleLayer;

