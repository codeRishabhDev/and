// HomeScreen.js
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Text,
  Image,
} from 'react-native';
import Categories from './Categories';
import SliderScreen from './Slider';
import ProductCard from './ProductScreen';
import SearchComponent from '../components/SearchInput/SearchInput';
import SearchInput from '../components/SearchInput/SearchInput';
import DealsForYou from '../components/DealsForYou/DealsForYou';

const dataSource = [
  {
    id: 1,
    title: 'Shooes',
    caption: 'Original Cheezy Meat',
    price: 49.99,
    rating: 4,
    url: 'https://www.shutterstock.com/image-photo/new-trendy-white-sports-sneaker-260nw-1866449773.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Burger 2',
    caption: '100% Original Beef',
    price: 49.99,
    rating: 4.5,
    url: 'https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Burger 3',
    caption: 'Mouthful Of Happiness',
    price: 49.99,
    rating: 4.2,
    url: 'https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 7,
    title: 'Burger 3',
    caption: 'Mouthful Of Happiness',
    price: 49.99,
    rating: 4.9,
    url: 'https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 9,
    name: 'Product Name',
    price: 49.99,
    rating: 4.5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    deliveryDate: 'January 25, 2023',
    url: 'https://www.prophotostudio.net/wp-content/uploads/2021/02/best-camera-photos1-scaled.jpeg',
  },
];

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    // Handle your search logic here
    setSearchText(text);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchInput
          placeholder="Search products..."
          onChangeText={handleSearch}
        />
      </View>

      <SliderScreen />

      {/* Categories Section */}
      <View style={styles.sectionContainer}>
        <Categories navigation={navigation} />
      </View>

      {/* Products Section */}
     
        <FlatList
          horizontal={true}
          style={{marginHorizontal:10}}
          data={dataSource}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <ProductCard key={index} product={item} navigation={navigation} />
          )}
        />
      <View>
        <Image
          source={{
            uri: 'https://www.shutterstock.com/image-vector/summer-sale-template-banner-vector-260nw-656471581.jpg',
          }}
          style={styles.cardImage}
          alt="offer image"
        />
      </View>
      <Text style={styles.textStyle}>Deals for you</Text>
      {/* Deals For You Section */}
      <DealsForYou />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  textStyle: {
    fontSize: 18,
    color: '#000',
    fontStyle: 'bold',
    padding: 15,
  },
  bannerImage: {
    flex: 1,
    flexDirection: 'row',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  productContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight:10
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '50%',
  },
});

export default HomeScreen;
