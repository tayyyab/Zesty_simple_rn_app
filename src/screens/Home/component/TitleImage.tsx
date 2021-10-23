import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const TitleImageComponent: React.FC<{
  title: String;
  image: any;
}> = ({title, image}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Image style={styles.imageContainer} source={{uri: image}} />
    </View>
  );
};

export default TitleImageComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 5,
    // color: 'black',
    fontWeight: '600',
  },
  imageContainer: {
    height: 200,
    backgroundColor: '#eee',
  },
});
