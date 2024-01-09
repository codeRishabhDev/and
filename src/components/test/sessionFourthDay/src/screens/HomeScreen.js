import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Card from '../components/card/CardComponent';
import axios from 'axios';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal/DeleteConfirmationModal';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [productId, setProductId] = useState();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  useEffect(() => {
    getAllPosts();
  });

  const getAllPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      response.data.length = 5;
      setData(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onEditPress = id => {
    console.log(id, 'onEditPress');
  };

  const onDeletePress = id => {
    setDeleteModalVisible(true);
    setProductId(id);
  };

  const handleDelete = () => {
    console.log(productId, 'handleDelete');
    setDeleteModalVisible(true);
  };

  return (
    <View>
      <View style={styles.actionButtons}>
        <Text style={styles.productText}>Product List</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('PostForm')}>
          <Text style={styles.buttonText}>Create Post</Text>
        </TouchableOpacity>
        
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            body={item.body}
            id={item.id}
            onEditPress={onEditPress}
            onDeletePress={onDeletePress}
          />
        )}
      />
      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isVisible={deleteModalVisible}
        onCancel={() => setDeleteModalVisible(false)}
        onDelete={handleDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  productText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    padding: 12
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
 
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
