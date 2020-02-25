import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	item: {
		backgroundColor: '#8acf9d',
		padding: 15,
		marginVertical: 5,
		fontSize: 30,
	},
});

const FlatListComponent = () => {
	const data = [
		{ key: 'john' },
		{ key: 'doe' },
		{ key: 'lucy' },
		{ key: 'mary' },
		{ key: 'percy' },
		{ key: 'harry' },
	];

	return (
		<View style={styles.container}>
			<FlatList data={data} renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>} />
		</View>
	);
};

export default FlatListComponent;
