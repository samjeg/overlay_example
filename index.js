import React from 'react';
import { AppRegistry, View } from 'react-native';
import Page from './src/components/Page';


const App = () => (
	<View style={{ flex: 1 }}>
		<Page />	
	</View>
);

AppRegistry.registerComponent('overlay_example', () => App);
