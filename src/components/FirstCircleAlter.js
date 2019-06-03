import React, { Component } from 'react';
import { View } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';


class FirstCircleLayer extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			firstCircleStyle: styles(this.props.firstCircleAlterElevation).firstCircleLayerStyle,
		};
	}

	render() {
		return (
			<View
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

