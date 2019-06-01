import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
// import FirstCircleLayer from './FirstCircleLayer';

class SecondCircleLayer extends Component { 
	constructor(props) {
		super(props);
		this.state = { 
			secondCircleStyle: styles(50).secondCircleLayerStyle,
		};
		this.putBehind = this.putBehind.bind(this);
	}

	componentDidUpdate() {
		const secondCircleElevation = StyleSheet.flatten(this.state.secondCircleStyle).elevation;
		const secondCircleLoaded = this.props.secondCircleLoaded;
		const firstCircleElevation = this.props.data;
		const firstCircleClicked = this.props.firstCircleClicked;
		console.log(
			'updated second circle ' +
			secondCircleElevation +
			' ' +
			firstCircleElevation + 
			' ' + 
			firstCircleClicked
		);

		if (firstCircleClicked && !secondCircleLoaded) {
			if (firstCircleElevation >= 50) {
				this.putBehind();
				this.props.onLoad(secondCircleElevation);
			}
		}
	}

	setElevation() {
		const secondCircleElevation = StyleSheet.flatten(this.state.secondCircleStyle).elevation;
		const firstCircleElevation = this.props.data;
		console.log(
			'second circle elevation ' +
			secondCircleElevation +
			' ' +
			firstCircleElevation
		);

		if (secondCircleElevation < 50 && firstCircleElevation >= 50) {
			this.putOnTop();
			this.props.onClick(secondCircleElevation);
		}
	}

	putOnTop() {
		console.log('putting second circle on top');
		this.setState({ 
			secondCircleStyle: styles(50).secondCircleLayerStyle 
		});
	}

	putBehind() {
		console.log('putting second circle on behind');
		this.setState({ 
			secondCircleStyle: styles(30).secondCircleLayerStyle 
		});
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
			marginHorizontal: vw(25),
			marginVertical: (vh(100) - vw(30)) / 2,
			elevation: localElevation,
		}
	});
};

export default SecondCircleLayer;

