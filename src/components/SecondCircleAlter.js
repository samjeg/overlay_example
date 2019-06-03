import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

class SecondCircleLayer extends Component { 
	constructor(props) {
		super(props);
		this.state = { 
			secondCircleStyle: styles(this.props.secondCircleAlterElevation).secondCircleLayerStyle,
		};
		// this.putBehind = this.putBehind.bind(this);
	}

	componentDidUpdate(prevProps) {
		// const secondCircleElevation = StyleSheet.flatten(this.state.secondCircleStyle).elevation;
		// const firstCircleClickedPrev = prevProps.firstCircleClicked; 
		// const firstCircleClicked = this.props.firstCircleClicked;
		// const fstCircElevation = this.props.firstCircleElevation;
		// const fstCircElevationPrev = prevProps.firstCircleElevation;
		// const scdCircElevation = this.props.secondCircleElevation;
		// const scdCircElevationPrev = prevProps.secondCircleElevation;
		// // const secondCircleAtBack = this.props.secondCircleAtBack;
		// // const firstCircleAtFront = this.props.firstCircleAtFront;
		// // const secondCircleClicked = this.props.secondCircleClicked;
		// // const secondCircleClickedPrev = prevProps.secondCircleClicked;
		// // const secondCircleAtBackPrev = prevProps.secondCircleAtBack;
		// // const firstCircleAtFrontPrev = prevProps.firstCircleAtFront;


		// // console.log(
		// // 	'component update second circle ' +
		// // 	fstCircElevation +
		// // 	' ' +
		// // 	fstCircElevationPrev +
		// // 	' ' +
		// // 	scdCircElevation +
		// // 	' ' +
		// // 	scdCircElevationPrev
		// // );
		// // 	firstCircleClicked + 
		// // 	' ' + 
		// // 	firstCircleClickedPrev +
		// // 	' ' +
		// // 	secondCircleClicked +
		// // 	' ' +
		// // 	secondCircleClickedPrev +
		// // 	' ' +
		// // 	firstCircleAtFront +
		// // 	' ' +
		// // 	firstCircleAtFrontPrev +
		// // 	' ' +
		// // 	secondCircleAtBack +
		// // 	' ' +
		// // 	secondCircleAtBackPrev

		// if (firstCircleClickedPrev !== firstCircleClicked) {
		// 	if (firstCircleClicked) {
		// 		// if (!firstCircleAtFront && !secondCircleAtBack) {
		// 			// this.putBehind();
		// 			// this.props.onLoad(secondCircleElevation);
		// 		// }
		// 	} 
		// }
		// // if (secondCircleClickedPrev !== secondCircleClicked) {
		// // 	if (!firstCircleClicked && secondCircleClicked) {
		// // 		if (firstCircleAtFront && secondCircleAtBack) {
		// // 			this.putOnTop();
		// // 			this.props.onClick(secondCircleElevation);
		// // 		}
		// // 	}
		// // }		
	}

	setElevation() {
		const secondCircleElevation = StyleSheet.flatten(this.state.secondCircleStyle).elevation;
		const firstCircleElevation = this.props.firstCircleAlterElevation;
		// const secondCircleAtBack = this.props.secondCircleAtBack;
		// const firstCircleAtFront = this.props.firstCircleAtFront;
		// const firstCircleClickedPrev = prevProps.firstCircleClicked;

		console.log(
			'set elevation alter second circle ' +
			firstCircleElevation +
			' ' +
			secondCircleElevation
		);	
			// firstCircleClicked +
			// ' ' +
			// secondCircleClicked 
			// ' ' +
			// firstCircleClickedPrev

		// if (secondCircleAtBack && firstCircleAtFront) {
			if (secondCircleElevation < 50 && firstCircleElevation >= 50) {
				// this.putOnTop();
				this.props.onClick();	
			}
		// }
	}

	putOnTop() {
		// console.log('putting second circle on top');
		this.setState({ 
			secondCircleStyle: styles(50).secondCircleLayerStyle 
		});
	}

	putBehind() {
		// console.log('putting second circle on behind');
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

// (vh(100) - vw(30)) / 2

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
			// zIndex: 0
		}
	});
};

export default SecondCircleLayer;

