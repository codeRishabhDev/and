// Categories.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Categories = ({navigation}) => {
  const categoriesData = [
    {
      id: 1,
      name: 'Electronics',
      items: [
        {
          id: 101,
          name: 'Smartphone',
          details: {
            url: '',
            size: 'Varies',
            color: 'Black',
            rating: 4.5,
            price: 699.99,
            description: 'High-end smartphone with advanced features.',
          },
        },
        {
          id: 102,
          name: 'Laptop',
          details: {
            url: '',
            size: '15-inch',
            color: 'Silver',
            rating: 4.8,
            price: 1299.99,
            description: 'Powerful laptop for work and entertainment.',
          },
        },
        {
          id: 103,
          name: 'Camera',
          details: {
            url: '',
            size: 'Compact',
            color: 'Black',
            rating: 4.2,
            price: 499.99,
            description: 'Professional camera for photography enthusiasts.',
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Clothing',
      items: [
        {
          id: 201,
          name: 'T-Shirt',
          details: {
            url: 'https://media.istockphoto.com/id/1501781167/photo/black-t-shirt-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=Y8-K7Fnrxje1eYzJJ28aNdfxJ7cWPm0gapZv3F71ghA=',
            size: ['S', 'M', 'L', 'XL'],
            color: ['Red', 'Blue', 'Green', 'White'],
            rating: 4.2,
            price: 19.99,
            description: 'Comfortable cotton T-shirt for everyday wear.',
          },
        },
        {
          id: 202,
          name: 'Jeans',
          details: {
            url: 'https://media.istockphoto.com/id/527236518/photo/mans-legs.jpg?s=612x612&w=0&k=20&c=lczyG0ZkWelpn_o-I_VpjAMo_sA3WpdWHMlgZjCSE-k=',
            size: ['28', '30', '32', '34'],
            color: ['Blue', 'Black', 'Gray'],
            rating: 4.5,
            price: 49.99,
            description: 'Classic denim jeans for a stylish look.',
          },
        },
        {
          id: 203,
          name: 'Jacket',
          details: {
            url: 'https://media.istockphoto.com/id/1501781167/photo/black-t-shirt-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=Y8-K7Fnrxje1eYzJJ28aNdfxJ7cWPm0gapZv3F71ghA=',
            size: ['S', 'M', 'L'],
            color: ['Brown', 'Black', 'Gray'],
            rating: 4.0,
            price: 79.99,
            description: 'Warm and stylish jacket for colder days.',
          },
        },
      ],
    },
    {
      name: 'Books',
      items: [
        {id: 201, name: 'T-Shirt'},
        {id: 202, name: 'Jeans'},
        {id: 203, name: 'Jacket'},
      ],
    },
    {
      name: 'Mobile',
      items: [
        {id: 201, name: 'T-Shirt'},
        {id: 202, name: 'Jeans'},
        {id: 203, name: 'Jacket'},
      ],
    },

    // Add more categories as needed
  ];

  return (
    <View style={styles.wrapper}>
      {categoriesData.map(category => (
        <>
          <TouchableOpacity
            key={category}
            style={styles.categoryContainer}
            onPress={() =>
              navigation.navigate('CategoriesListPage', {
                category: category.items,
              })
            }>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        </>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  categoryContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Categories;
