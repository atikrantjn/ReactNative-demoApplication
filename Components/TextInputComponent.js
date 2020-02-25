import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
const TextInputComponent = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 15,
          textAlign: 'center',
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        This is the Text input component demo!!
      </Text>
      <View style={{flex: 1, marginTop: 15}}>
        <TextInput
          style={{height: 40, borderColor: 'black', borderWidth: 2, width: 200}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TextInputComponent;
