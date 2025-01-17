import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer'
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('./assets/images/background-image.png')
const [selectedImage, setSelectedImage] = useState(null);

export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} />
      <ImageViewer placeholderImageSource={PlaceholderImage} 
      selectedImage={selectedImage} />
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
      {/*       <Text style={styles.text}>
        Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    fontSize: 50,
    alignItems: 'center;',
  }
});
