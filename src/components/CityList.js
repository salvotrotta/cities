import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import firebase from 'firebase';
import CityDetail from './CityDetail';

class CityList extends Component {

  state = { cities: [] };

  componentWillMount() {
    firebase.database().ref('cities')
    .on('value',  (snapshot) => {
      const cityList = [];
      snapshot.forEach(child => {
        const city = child.val();
        cityList.push(city);
      });
      this.setState({ cities: cityList })
    });
  }

  renderCities() {
    this.state.cities.map( city =>
       <Text key={city.title}>{city.title}</Text>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderCities()}
      </ScrollView>
    );
  }

}

export default CityList;
