import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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

const FlatListComponent = ({navigation}) => {
  const data = [
    {key: 'john'},
    {key: 'doe'},
    {key: 'lucy'},
    {key: 'mary'},
    {key: 'percy'},
    {key: 'harry'},
  ];

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        This is the FlatList component demo
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListComponent;
