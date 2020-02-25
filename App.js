import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ScrollViewComponent from './Components/ScrollViewComponent';
import FlatListComponent from './Components/ListViewComponents/FlatListComponent';
import SectionListComponent from './Components/ListViewComponents/SectionListComponent';
import ModalComponent from './Components/ModalComponent/ModalComponent';
export default class App extends Component {
	render() {
		return (
			<ScrollView>
				<ScrollViewComponent />
				<Text style={styles.sectionListHeading}>Flat List Component</Text>
				<FlatListComponent />
				<Text style={styles.sectionListHeading}>Section List Component</Text>
				<SectionListComponent />
				<ModalComponent />
				<Text>kskjfhskdjfhksdhkjhsdjkdhsfdhfhfghfhfghfghfhfghfhfghfhfhfhgfhfghffhfkhsdjk</Text>
				<Text>kskjfhskdjfhksdhkjhsdjkdhsfdhfhfghfhfghfghfhfghfhfghfhfhfhgfhfghffhfkhsdjk</Text>
				<Text>kskjfhskdjfhksdhkjhsdjkdhsfdhfhfghfhfghfghfhfghfhfghfhfhfhgfhfghffhfkhsdjk</Text>
				<Text>kskjfhskdjfhksdhkjhsdjkdhsfdhfhfghfhfghfghfhfghfhfghfhfhfhgfhfghffhfkhsdjk</Text>
			</ScrollView>
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
