// PostForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handlePostData = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: 1, // You can set the user ID as needed
      });


      console.log('Post successful:', response.data);

      // Clear the form after successful post
      setTitle('');
      setBody('');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error posting data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Enter title"
      />

      <Text style={styles.label}>Body:</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={body}
        onChangeText={(text) => setBody(text)}
        placeholder="Enter body"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.postButton} onPress={handlePostData}>
        <Text style={styles.postButtonText}>Post Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top', // For multiline input
  },
  postButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PostForm;
