import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './common/Header';


class AuthApp extends Component {

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
    console.log('render App');
    return (
      <View style={{ flex: 1 }}>
        <Header title='Auth' />
      </View>
    );
  }
}

export default AuthApp;
