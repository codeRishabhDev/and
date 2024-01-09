// CategoriesListPage.js

import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';

// Dummy data for categories and items

const CategoriesListPage = ({navigation, route}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {category} = route.params;

  const handleCategoryPress = category => {
    setSelectedCategory(category);
    // Navigate to the list of items for the selected category
    navigation.navigate('ItemsListPage', {
      items: category.items,
      categoryName: category.name,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <FlatList
        data={category}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('Details', { data: item, type: 'category' })}>
            <Image source={{uri: item.details.url}} style={styles.categoryImage} />
            <View style={styles.categoryDetails}>
              <Text style={styles.categoryName}>{item.name}</Text>
              <Text style={styles.categoryPrice}>${item.details.price}</Text>
                <Text style={styles.categoryOffers}>
                  {item.details.offers} offers available
                </Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>Rating: {item.details.rating}</Text>
                  
                </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
categoryItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  categoryImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  categoryDetails: {
    flex: 1,
    padding: 12,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryPrice: {
    fontSize: 16,
    color: 'green',
  },
  categoryOffers: {
    fontSize: 14,
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontSize: 14,
    marginRight: 4,
  },
});

export default CategoriesListPage;
