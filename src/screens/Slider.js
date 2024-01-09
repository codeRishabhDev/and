// SliderScreen.js
import React from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';

const dataSource = [
  {
    title: 'Burger 1',
    caption: 'Original Cheezy Meat',
    url: 'https://static.vecteezy.com/system/resources/thumbnails/001/381/216/small/special-offer-sale-banner-with-megaphone-free-vector.jpg',
  },
  {
    title: 'Burger 2',
    caption: '100% Original Beef',
    url: 'https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg',
  },
  {
    title: 'Burger 3',
    caption: 'Mouthful Of Happiness',
    url: 'https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg',
  },
];

const SliderScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={false} autoplay>
          {dataSource.map((item, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{uri: item.url}} style={styles.bannerImage} />
            </View>
          ))}
        </Swiper>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default SliderScreen;
