import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 15,
          textAlign: 'center',
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        This is the image component demo
      </Text>
      <View style={{flex: 1, marginTop: 15}}>
        <Image
          source={require('../assets/21762040-7751327-image-m-35_1575384148190.jpg')}
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

export default ImageComponent;
