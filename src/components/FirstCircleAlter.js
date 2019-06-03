import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';


class FirstCircleLayer extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			firstCircleStyle: styles(this.props.firstCircleAlterElevation).firstCircleLayerStyle,
		};
	}

	componentDidUpdate(prevProps) {
		// const firstCircleElevation = StyleSheet.flatten(this.state.firstCircleStyle).elevation;
		// const secondCircleClicked = this.props.secondCircleClicked;
		// const secondCircleClickedPrev = prevProps.secondCircleClicked;
		// const fstCircElevation = this.props.firstCircleElevation;
		// const fstCircElevationPrev = prevProps.firstCircleElevation;
		// const scdCircElevation = this.props.secondCircleElevation;
		// const scdCircElevationPrev = prevProps.secondCircleElevation;		
		// // const firstCircleAtBack = this.props.firstCircleAtBack;
		// // const secondCircleAtFront = this.props.secondCircleAtFront;
		// // const firstCircleClickedPrev = prevProps.firstCircleClicked; 
		// // const firstCircleClicked = this.props.firstCircleClicked;
		// // const firstCircleAtBackPrev = prevProps.firstCircleAtBack;
		// // const secondCircleAtFrontPrev = prevProps.secondCircleAtFront;


		// // console.log(
		// // 	'component update first circle ' +
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
		// // 	firstCircleAtBack +
		// // 	' ' +
		// // 	firstCircleAtBackPrev +
		// // 	' ' +
		// // 	secondCircleAtFront +
		// // 	' ' +
		// // 	secondCircleAtFrontPrev 

		// if (secondCircleClickedPrev !== secondCircleClicked) {
		// 	if (secondCircleClicked) {
		// 		// if (!firstCircleAtBack && !secondCircleAtFront) {
		// 			// this.putBehind();
		// 			// this.props.onLoad(firstCircleElevation);
		// 		// }
		// 	}
		// }
		// if (firstCircleClickedPrev !== firstCircleClicked) {
		// 	if (firstCircleClicked && !secondCircleClicked) {
		// 		if (firstCircleAtBack && secondCircleAtFront) {
		// 			this.putOnTop();
		// 			this.props.onClick(firstCircleElevation);	
		// 		}
		// 	}
		// }
	}


	setElevation() {
		// const firstCircleElevation = StyleSheet.flatten(this.state.firstCircleStyle).elevation;
		// const secondCircleElevation = this.props.secondCircleAlterElevation;
		// // const firstCircleAtBack = this.props.firstCircleAtBack;
		// // const secondCircleAtFront = this.props.secondCircleAtFront;
		// // const secondCircleClicked = this.props.secondCircleClicked;
		// // const firstCircleClicked = this.props.firstCircleClicked;
		// // const secondCircleClickedPrev = prevProps.secondCircleClicked;

		// // console.log('set elevation first circle');
		// // 	firstCircleClicked +
		// // 	' ' +
		// // 	secondCircleClicked 
		// 	// ' ' +
		// 	// secondCircleClickedPrev

		// // if (firstCircleAtBack && secondCircleAtFront) {
		// 	if (firstCircleElevation < 50 && secondCircleElevation >= 50) {
		// 		// this.putOnTop();
		// 		this.props.onClick(firstCircleElevation);
		// 	}
		// }
	}

	putOnTop() {
		// console.log('putting first circle on top');
		this.setState({ 
			firstCircleStyle: styles(50).firstCircleLayerStyle 
		});
	}

	putBehind() {
		// console.log('putting first circle behind');
		this.setState({ 
			firstCircleStyle: styles(30).firstCircleLayerStyle 
		});
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
			// zIndex: 100
		},
   });
 };
 
export default FirstCircleLayer;

