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
        <Image style={styles.thumnailStyle} source={{uri: thumbnail_image}}/>
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

const styles = {
  thumnailStyle:{
    height: 50,
    width: 50
  }
}

export default CityDetail;