import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import CityList from './src/components/CityList';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCaqANJZwEfrciytOY49PbRAJUq4lN3EdU',
      authDomain: 'test-react-1.firebaseapp.com',
      databaseURL: 'https://test-react-1.firebaseio.com',
      storageBucket: 'test-react-1.appspot.com',
      messagingSenderId: '841648644958'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Cities' />
        <CityList />
      </View>
    );
  }
}

AppRegistry.registerComponent('cities', () => App);
