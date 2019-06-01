import React, { Component } from 'react';
import { View } from 'react-native';
import FirstLayer from './FirstLayer';
import SecondLayer from './SecondLayer';
import FirstCircleLayer from './FirstCircleLayer';
import SecondCircleLayer from './SecondCircleLayer';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			firstCircleElevation: 30,
			secondCircleElevation: 50,
			firstCircleClicked: false,
			secondCircleClicked: false,
			firstCircleLoaded: false,
			secondCircleLoaded: false
		};
	}
	render() {
		return (
			<View>
				<FirstLayer />
				<SecondLayer />
				<FirstCircleLayer 
					onClick={currentElevation => {
						if (currentElevation < 50) {
							this.setState({ 
								firstCircleElevation: 50,
								firstCircleClicked: true, 
								secondCircleLoaded: false
							});
						}
					}}
					onLoad={currentElevation => {
						if (currentElevation >= 50) {
							this.setState({ 
								firstCircleElevation: 30,
								firstCircleClicked: false,
								firstCircleLoaded: true 
							});
						}
					}}
					data={
						this
						.state
						.secondCircleElevation
					}
					secondCircleClicked={
						this
						.state
						.secondCircleClicked
					}
					firstCircleLoaded={
						this
						.state
						.firstCircleLoaded
					}					                                                         
				/>
				<SecondCircleLayer 
					onClick={currentElevation => {
						if (currentElevation < 50) {
							this.setState({ 
								secondCircleElevation: 50,
								secondCircleClicked: true,
								firstCircleLoaded: false
							});
						}
					}}
					onLoad={currentElevation => {
						if (currentElevation >= 50) {
							this.setState({ 
								secondCircleElevation: 30,
								secondCircleClicked: false,
								secondCircleLoaded: true
							});
						}
					}}
					data={
						this
						.state
						.firstCircleElevation
					}
					firstCircleClicked={
						this
						.state
						.firstCircleClicked
					}
					secondCircleLoaded={
						this
						.state
						.secondCircleLoaded
					}
				/>
			</View>
		);
	}
}


export default Page;
