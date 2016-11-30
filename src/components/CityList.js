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
    return this.state.cities.map( city =>
       <CityDetail key={city.title} city={city} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderCities()}
      </ScrollView>
    );
  }

}

export default CityList;
