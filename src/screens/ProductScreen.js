// ProductCard.js
import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ProductCard = ({product, navigation}) => {
  
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Details', { data: product, type: 'product' })}>
      <Image source={{uri: product.url}} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{product.title}</Text>
      <Text style={styles.cardCaption}>{product.caption}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 10
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  cardCaption: {
    fontSize: 14,
    color: '#888',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
});

export default ProductCard;
