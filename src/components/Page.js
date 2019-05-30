import React from 'react';
import { View, StyleSheet } from 'react-native';
import FirstLayer from './FirstLayer';
import SecondLayer from './SecondLayer';
import FirstCircleLayer from './FirstCircleLayer';
import SecondCircleLayer from './SecondCircleLayer';

const Page = () => {
	return (
		<View>
			<FirstLayer />
			<SecondLayer />
			<FirstCircleLayer onPress={() => switchCircle()} />
			<SecondCircleLayer />
		</View>
	);
};

const switchCircle = () => {
	const elevation = StyleSheet.flatten(this.props.style).elevation;

	if (elevation >= 30) {
		return 30;
	}
	return 45;
};

// const switchSecondCircle = (props) => {
// 	const elevation = StyleSheet.flatten(props.style).elevation;

// 	if (elevation === 40) {
// 		return 30;
// 	}
// 	return 40;
// };

export default Page;
