// SearchInput.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = ({ placeholder, onChangeText }) => (
  <View style={styles.container}>
    <View style={styles.searchBox}>
      <Icon name="search-outline" size={20} color="#777" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#777"
        onChangeText={onChangeText}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchInput;
