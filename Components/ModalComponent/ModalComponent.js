import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Modal, Button } from 'react-native';

export class ModalComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: false,
		};
	}

	setVisible(visible) {
		this.setState({ isVisible: visible });
	}

	render() {
		const styles = StyleSheet.create({
			modalStyle: {
				justifyContent: 'center',
				alignItems: 'center',
				height: 300,
				width: '90%',
				borderRadius: 10,
				borderWidth: 1,
				borderColor: '#fff',
				backgroundColor: '#6fbf9f',
			},
		});

		return (
			<View style={{ marginTop: 32, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Modal
					style={StyleSheet.modalStyle}
					animationType="fade"
					transparent={true}
					visible={this.state.isVisible}
					onRequestClose={() => {
						this.setVisible(!this.state.isVisible);
					}}
				>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<View style={styles.modalStyle}>
							<Text style={{ fontSize: 25, margin: 30 }}>hello</Text>
							<Button
								title="hide modal"
								onPress={() => {
									this.setVisible(!this.state.isVisible);
								}}
							></Button>
						</View>
					</View>
				</Modal>
				<Button
					title="show modal"
					onPress={() => {
						this.setVisible(true);
					}}
				></Button>
			</View>
		);
	}
}

export default ModalComponent;
