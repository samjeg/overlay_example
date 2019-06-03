import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';


class FirstCircleLayer extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			firstCircleStyle: styles(this.props.firstCircleElevation).firstCircleLayerStyle,
		};
	}


	setElevation() {
		const firstCircleElevation = StyleSheet.flatten(this.state.firstCircleStyle).elevation;
		const secondCircleElevation = this.props.secondCircleElevation;

		console.log(
			'set elevation first circle ' +
			firstCircleElevation +
			' ' +
			secondCircleElevation
		);
		
		if (firstCircleElevation < 50 && secondCircleElevation >= 50) {
			this.props.onClick();
		}
	}

	render() {
		return (
			<TouchableOpacity
				onPress={() => this.setElevation()} 
				style={this.state.firstCircleStyle}                                               
			/>
		);
	}
}

let styles = function (localElevation) {
   return ({
		firstCircleLayerStyle: {
			position: 'absolute',
			backgroundColor: '#4165F4',
			borderRadius: vw(40) / 2,
			height: vw(40),
			width: vw(40),
			marginHorizontal: vw(30),
			marginVertical: (vh(100) - vw(40)) / 2,
			alignItems: 'center',
			elevation: localElevation
		},
   });
 };
 
export default FirstCircleLayer;

