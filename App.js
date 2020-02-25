import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native';
import ScrollViewComponent from './Components/ScrollViewComponent';
import FlatListComponent from './Components/ListViewComponents/FlatListComponent';
import SectionListComponent from './Components/ListViewComponents/SectionListComponent';
import ModalComponent from './Components/ModalComponent/ModalComponent';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
export default class App extends Component {
	constructor(props) {
		super(props);



	}

	
	render() {

		return (
			<NavigationContainer>
				<ScrollView>
					<ScrollViewComponent />
					<Text style={styles.sectionListHeading}>Flat List Component</Text>
					<FlatListComponent />
					<Text style={styles.sectionListHeading}>Section List Component</Text>
					<SectionListComponent />
					<ModalComponent />


				</ScrollView>
			</NavigationContainer>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	sectionListHeading: {
		flex: 1,
		fontSize: 45,
		color: 'red',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		borderTopColor: 'black',
		borderTopWidth: 1,
		marginTop: 25,
	},
});
