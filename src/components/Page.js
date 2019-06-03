import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FirstLayer from './FirstLayer';
import SecondLayer from './SecondLayer';
import FirstCircleLayer from './FirstCircleLayer';
import SecondCircleLayer from './SecondCircleLayer';
import FirstCircleAlter from './FirstCircleAlter';
import SecondCircleAlter from './SecondCircleAlter';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			renderAlternate: false,
			firstCircleElevation: 30,
			firstCircleClicked: false,
			secondCircleElevation: 50,
			firstCircleAlterElevation: 50,
			secondCircleAlterElevation: 30,
			secondCircleAlterClicked: false,
		};
	}


	render() {
		let firstCircle;
		let secondCircle;
		
		if (!this.state.renderAlternate) {
			firstCircle = (<FirstCircleLayer 
							onClick={() =>
								this.setState({ 
									renderAlternate: true
								})
							}
							firstCircleElevation={
								this
								.state
								.firstCircleElevation
							} 
							secondCircleElevation={
								this
								.state
								.secondCircleElevation
							}                                              
			/>);
			secondCircle = (<SecondCircleLayer
							firstCircleElevation={
								this
								.state
								.firstCircleElevation
							}
							secondCircleElevation={
								this
								.state
								.secondCircleElevation
							} 
			/>);
		} else {
			secondCircle = (<FirstCircleAlter
							firstCircleAlterElevation={
								this
								.state
								.firstCircleAlterElevation
							} 
							secondCircleAlterElevation={
								this
								.state
								.secondCircleAlterElevation
							}
			/>);
			firstCircle = (<SecondCircleAlter 
							onClick={() => this.setState({ 
								renderAlternate: false
								})
							}
							firstCircleAlterElevation={
								this
								.state
								.firstCircleAlterElevation
							}
							secondCircleAlterElevation={
								this
								.state
								.secondCircleAlterElevation
							}	
			/>);
		}

		return (
			<View>
				{ firstCircle }
				{ secondCircle }
			</View>
		);
	}
}


export default Page;
