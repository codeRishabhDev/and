// DealsForYou.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const dealsData = [
  {
    id: '1',
    title: 'Product 1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    price: '$19.99',
    offPrice: "47%",
  },
  {
    id: '2',
    title: 'Product 2',
    image:
      'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
    price: '$29.99',
    offPrice: "39%",
  },
  {
    id: '3',
    title: 'Product 3',
    image:
      'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
    price: '$39.99',
    offPrice: "36%",
  },
  {
    id: '4',
    title: 'Product 4',
    image:
      'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
    price: '$49.99',
    offPrice: "45%",
  },
  // Add more deals as needed
];

const specialDeal = {
  title: 'Special Deal!',
  description: 'Get 48% off on selected items',
};


const DealCard = ({title, description}) => (
  <View style={[styles.dealItem, styles.specialDealItem]}>
    <Text style={styles.specialDealTitle}>{title}</Text>
    <Text style={styles.specialDealDescription}>{description}</Text>
  </View>
);

const DealCardmy = ({offPrice}) => (
    <View style={[styles.dealItem, styles.specialDealItem]}>
      <Text style={styles.specialDealTitle}>{offPrice} Off </Text>
    </View>
  );

const DealsForYou = () => {
  const renderDealItem = ({item}) => (
    <View style={styles.dealItem}>
      <TouchableOpacity>
        <Image source={{uri: item.image}} style={styles.dealImage} />
        {/* <Text style={styles.dealTitle}>{item.title}</Text>
        <Text style={styles.dealPrice}>{item.price}</Text> */}
      </TouchableOpacity>
      <DealCardmy
        offPrice={item.offPrice}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dealsData}
        keyExtractor={item => item.id}
        renderItem={renderDealItem}
        numColumns={2}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      />
      <DealCard
        title={specialDeal.title}
        description={specialDeal.description}
      />
      <Text>See all deals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  dealItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  specialDealItem: {
    backgroundColor: 'red',
    marginTop: 16,
  },
  dealImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  dealTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dealPrice: {
    fontSize: 14,
    color: '#888',
  },
  specialDealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  specialDealDescription: {
    fontSize: 16,
    color: '#fff',
  },
});

export default DealsForYou;
