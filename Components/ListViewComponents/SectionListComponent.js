import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	item: {
		backgroundColor: '#7a8799',
		padding: 15,

		fontSize: 25,
	},
	header: {
		backgroundColor: '#272b23',
		color: 'white',
		fontSize: 40,
	},
});

const SectionListComponent = () => {
	const data = [
		{
			title: 'Main dishes',
			data: ['Pizza', 'Burger', 'Risotto'],
		},
		{
			title: 'Sides',
			data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
		},
		{
			title: 'Drinks',
			data: ['Water', 'Coke', 'Beer'],
		},
		{
			title: 'Desserts',
			data: ['Cheese Cake', 'Ice Cream'],
		},
	];
	return (
		<View style={styles.container}>
			<SectionList
				sections={data}
				renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
				renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
				keyExtractor={(item, index) => index}
			/>
		</View>
	);
};

export default SectionListComponent;
