import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import FlatListComponent from './ListViewComponents/FlatListComponent';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	imageContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 10,
	},
});

const ScrollViewComponent = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={{ fontSize: 96 }}>Scroll me plz</Text>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
			</View>

			<Text style={{ fontSize: 96 }}>If you like</Text>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
			</View>

			<Text style={{ fontSize: 96 }}>Scrolling down</Text>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
			</View>
			<Text style={{ fontSize: 96 }}>What's the best!!</Text>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
				<Image
					source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png', width: 64, height: 64 }}
				/>
			</View>
		</ScrollView>
	);
};

export default ScrollViewComponent;
