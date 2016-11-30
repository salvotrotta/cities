import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const CityDetail = ({ city }) => {

  const { title, thumbnail_image, url } = city;

  return (
    <Card>

      <CardSection>
      <View>
        <Image source={{uri: thumbnail_image}}/>
      </View>
      <View>
        <Text>{title}</Text>
      </View>
      </CardSection>

      <CardSection>
      </CardSection>

      <CardSection>
      </CardSection>

    </Card>
  );
};

export default CityDetail;
