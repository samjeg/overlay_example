import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FirstLayer from './FirstLayer';
import SecondLayer from './SecondLayer';
import FirstCircleLayer from './FirstCircleLayer';
import SecondCircleLayer from './SecondCircleLayer';

// const fstcrclelv = StyleSheet.flatten(FirstCircleLayer).elevation;
// const scdcrclelv = StyleSheet.flatten(.style).elevation;

class Page extends Component {


	// switchCircle() {
	// 	if (fstcrclelv > scdcrclelv) {
	// 		console.log('first over second');
	// 	} else {
	// 		console.log('second over first');	
	// 	}
	// }

	renderAlbums() {
		
	}

	render() {
		console.log(SecondCircleLayer.default.style);
        // this.switchCircle();
		return (
			<View>
				<FirstLayer />
				<SecondLayer />
				<FirstCircleLayer />
				<SecondCircleLayer />
			</View>
		);
	}
}

export default Page;
