// ImagePickerComponent.js
import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  SafeAreaView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ImagePickerComponent = ({onSelectImages, isChecked}) => {
  const [images, setImages] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const pickImages = async () => {
    try {
      if (isChecked) {
        const response = await ImagePicker.openPicker({
          multiple: true,
          mediaType: 'photo',
          compressImageQuality: 0.5,
        });

        if (response && response.length > 0) {
          const selectedImages = response.map(item => item.path);
          setImages(selectedImages);
          onSelectImages(selectedImages); // Notify the parent component about the selected images
        }
      } else {
        toggleModal();
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={pickImages}
          style={styles.button}>
          <Text style={styles.buttonText}>Select Images</Text>
        </TouchableOpacity>
      </View>
      {isModalVisible && (
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Please check the checkbox first</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={{color: 'blue', marginTop: 10}}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ImagePickerComponent;
