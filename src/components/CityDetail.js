import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

const CityDetail = ({ city }) => {
  const { title, thumbnail_image, image, url, country } = city;

  return (
    <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
      </View>
      <View style={styles.headerContentStyle}>
        <Text>{title}</Text>
        <Text>{country}</Text>
      </View>
    </CardSection>

    <CardSection>
      <Image style={styles.imageStyle} source={{ uri: image }} />
    </CardSection>

    <CardSection>
      <Button onPress={() => Linking.openURL(url)}>
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
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default CityDetail;
