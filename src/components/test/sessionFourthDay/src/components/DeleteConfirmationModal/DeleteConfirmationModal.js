// DeleteConfirmationModal.js
import React from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';

const DeleteConfirmationModal = ({ isVisible, onCancel, onDelete,}) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={onCancel}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancel" onPress={onCancel}/>
          <Button title="Delete" onPress={onDelete}/>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: 300,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default DeleteConfirmationModal;
