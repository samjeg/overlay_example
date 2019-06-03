import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

class SecondCircleLayer extends Component { 
	constructor(props) {
		super(props);
		this.state = { 
			secondCircleStyle: styles(this.props.secondCircleAlterElevation).secondCircleLayerStyle,
		};
	}

	setElevation() {
		const secondCircleElevation = StyleSheet.flatten(this.state.secondCircleStyle).elevation;
		const firstCircleElevation = this.props.firstCircleAlterElevation;

		console.log(
			'set elevation alter second circle ' +
			firstCircleElevation +
			' ' +
			secondCircleElevation
		);	

		if (secondCircleElevation < 50 && firstCircleElevation >= 50) {
			this.props.onClick();	
		}
	}

	render() {
		return (
			<TouchableOpacity
				onPress={() => this.setElevation()} 
				style={this.state.secondCircleStyle}                                               
			/>
		);
	}
}

let styles = function (localElevation) {
   return ({
		secondCircleLayerStyle: {
			position: 'absolute',
			backgroundColor: '#41F4F1',
			height: vw(30),
			width: vw(50),
			marginVertical: (vh(100) - vw(30)) / 2,
			marginHorizontal: vw(25),
			elevation: localElevation
		}
	});
};

export default SecondCircleLayer;

