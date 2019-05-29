import React from 'react';
import { AppRegistry, View } from 'react-native';
import FirstLayer from './src/components/FirstLayer';

const App = () => (
	<View style={{ flex: 1 }}>
		<FirstLayer />
	</View>
);

AppRegistry.registerComponent('overlay_example', () => App);
