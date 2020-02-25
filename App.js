import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import TextInputComponent from './Components/TextInputComponent';
import ImageComponent from './Components/ImageComponent';
import FlatListComponent from './Components/ListViewComponents/FlatListComponent';
import SectionListComponent from './Components/ListViewComponents/SectionListComponent';
import ModalComponent from './Components/ModalComponent/ModalComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="FlatListComponent"
            component={FlatListComponent}
          />
          <Stack.Screen
            name="SectionListComponent"
            component={SectionListComponent}
          />
          <Stack.Screen name="ModalComponent" component={ModalComponent} />
          <Stack.Screen name="ImageComponent" component={ImageComponent} />
          <Stack.Screen
            name="TextInputComponent"
            component={TextInputComponent}
          />
        </Stack.Navigator>
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
