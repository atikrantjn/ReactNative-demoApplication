import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            marginBottom: 10,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Welcome to home screen!!
        </Text>
      </View>

      <View style={{marginBottom: 10}}>
        <Button
          title="Flat List Component"
          onPress={() => navigation.navigate('FlatListComponent')}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button
          title="section list component "
          onPress={() => navigation.navigate('SectionListComponent')}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button
          title="Modal component "
          onPress={() => navigation.navigate('ModalComponent')}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button
          title="image component "
          onPress={() => navigation.navigate('ImageComponent')}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button
          title="Text input component "
          onPress={() => navigation.navigate('TextInputComponent')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
