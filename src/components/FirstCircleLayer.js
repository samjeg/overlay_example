import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';


class FirstCircleLayer extends Component {
	constructor(props) {
		super(props);
		this.state = { firstCircleStyle: styles(30).firstCircleLayerStyle };
	}

	setElevation() {
		const elevation = StyleSheet.flatten(this.state.firstCircleStyle).elevation;

		if (elevation >= 30) {
			this.setState({ firstCircleStyle: styles(30).firstCircleLayerStyle });
		}
		this.setState({ firstCircleStyle: styles(50).firstCircleLayerStyle });
	}

	render() {
		return (
			<TouchableOpacity onPress={() => this.setElevation()} style={this.state.firstCircleStyle} />
		);
	}
}

let styles = function (localElevation) {
   return ({
		firstCircleLayerStyle: {
			backgroundColor: '#4165F4',
			borderRadius: vw(40) / 2,
			height: vw(40),
			width: vw(40),
			marginHorizontal: vw(30),
			marginVertical: (vh(100) - vw(40)) / 2,
			elevation: localElevation,
		},
   });
 };

 
export default FirstCircleLayer;

