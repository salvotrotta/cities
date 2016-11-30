import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0
  }
};

export default Card;
