import { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const [currentImage, setCurrentImage] = useState(placeholderImageSource);
    const imageSource = selectedImage ? { uri: selectedImage} : placeholderImageSource;

    useEffect(() => {
        setCurrentImage(selectedImage || placeholderImageSource);
    }, [selectedImage]);
    return(
        <Image source={currentImage} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});