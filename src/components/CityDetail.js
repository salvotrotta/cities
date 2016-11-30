import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CityDetail = ({ city }) => {

  const { title, thumbnail_image, url, country, image } = city;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}}/>
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{country}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image}} />
      </CardSection>

      <CardSection>
        <Button>
          Wikipedia
        </Button>
      </CardSection>

    </Card>
  );

};

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailStyle:{
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
};



export default CityDetail;
