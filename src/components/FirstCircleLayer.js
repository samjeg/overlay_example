import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
// import SecondCircleLayer from './SecondCircleLayer';


class FirstCircleLayer extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			firstCircleStyle: styles(30).firstCircleLayerStyle
		};
		this.putBehind = this.putBehind.bind(this);
	}

	componentDidUpdate() {
		const firstCircleElevation = StyleSheet.flatten(this.state.firstCircleStyle).elevation;
		const firstCircleLoaded = this.props.firstCircleLoaded;
		const secondCircleElevation = this.props.data;
		const secondCircleClicked = this.props.secondCircleClicked;
		console.log(
			'updated first circle ' + 
			firstCircleElevation + 
			' ' + 
			secondCircleElevation + 
			' ' + 
			secondCircleClicked
		);

		if (secondCircleClicked && !firstCircleLoaded) {
			if (secondCircleElevation >= 50) {
				this.putBehind();
				this.props.onLoad(firstCircleElevation);
			}
		}
	}


	setElevation() {
		const firstCircleElevation = StyleSheet.flatten(this.state.firstCircleStyle).elevation;
		const secondCircleElevation = this.props.data;
		console.log(
			'first circle elevation ' +
			firstCircleElevation +
			' ' +
			secondCircleElevation  
		);

		if (firstCircleElevation < 50 && secondCircleElevation >= 50) {
			this.putOnTop();
			this.props.onClick(firstCircleElevation);
		} 
	}

	putOnTop() {
		console.log('putting first circle on top');
		this.setState({ 
			firstCircleStyle: styles(50).firstCircleLayerStyle 
		});
	}

	putBehind() {
		console.log('putting first circle behind');
		this.setState({ 
			firstCircleStyle: styles(30).firstCircleLayerStyle 
		});
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

