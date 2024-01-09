// DetailsScreen.js

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const DetailsScreen = ({route}) => {
  const {data, type} = route.params;
  const renderDetails = () => {
    if (type === 'product') {
      return (
        <ScrollView style={styles.container}>
          {/* Product Image */}
          <Image source={{uri: data.url}} style={styles.productImage} />

          {/* Product Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{data.title}</Text>
            <Text style={styles.price}>${data.price}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating: {data.rating}</Text>
          </View>

          {/* Delivery Information */}
          {/* <View style={styles.deliveryContainer}>
            <Text style={styles.deliveryText}>
              Free Delivery by {product.deliveryDate}
            </Text>
          </View> */}

          {/* EMI and Buy Now Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('EMI clicked')}>
              <Text style={styles.buttonText}>Pay with EMI</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buyNowButton]}
              onPress={() => console.log('Buy Now clicked')}>
              <Text style={[styles.buttonText, styles.buyNowButtonText]}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => console.log('Add to Cart clicked')}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    } else if (type === 'category') {
      return (
        <ScrollView style={styles.container}>
          {/* Category Details */}
          {/* Product Image */}
          <Image source={{uri: data.details.url}} style={styles.productImage} />
          <View style={styles.detailsContainer}>
            {/* <Text style={styles.name}>{data.name}</Text> */}
            {/* Additional category details can be added here */}
          </View>
          {/* Product Details */}
          <View style={styles.detailsContainer}>
            {/* <Text style={styles.name}>{data.title}</Text> */}
            <Text style={styles.price}>${data.details.price}</Text>
            <Text style={styles.description}>{data.details.description}</Text>
          </View>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating: {data.details.rating}</Text>
          </View>

          {/* EMI and Buy Now Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('EMI clicked')}>
              <Text style={styles.buttonText}>Pay with EMI</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buyNowButton]}
              onPress={() => console.log('Buy Now clicked')}>
              <Text style={[styles.buttonText, styles.buyNowButtonText]}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => console.log('Add to Cart clicked')}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  };

  return renderDetails();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  ratingContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  ratingText: {
    fontSize: 18,
  },
  deliveryContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  deliveryText: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  buyNowButton: {
    backgroundColor: '#FF4500', // Change color for Buy Now button
  },
  buyNowButtonText: {
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50', // Change color for Add to Cart button
    padding: 15,
    borderRadius: 5,
    margin: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
