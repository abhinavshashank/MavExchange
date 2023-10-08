import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, putString } from 'firebase/storage';

import firebaseConfig from '../../firebaseConfig';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

const AddProductScreen = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [imageUri, setImageUri] = useState(null);

    const user = auth.currentUser; // Get the authenticated user

    const handleImageUpload = async () => {
        if (!user) {
            Alert.alert('Authentication Error', 'Please log in to upload a product.');
            return;
        }

        const imageName = `${Date.now()}.jpg`;
        const imageRef = storageRef(storage, `productImages/${imageName}`);

        try {
            await putString(imageRef, imageUri, 'data_url');
            console.log('Image uploaded successfully!');

            const downloadURL = await imageRef.getDownloadURL();

            const productData = {
                name: productName,
                owner: user.uid, // Set the owner field to the UID of the authenticated user
                price: productPrice,
                description: productDescription,
                category: productCategory,
                imageURL: downloadURL,
                sold_out: false, // Set sold_out to false by default
            };

            await push(ref(database, 'products'), productData);
            console.log('Product added successfully!');

            Alert.alert('Product Added', 'Your product has been added successfully.');
        } catch (error) {
            console.error('Error uploading image:', error);
            Alert.alert('Error', 'There was an error uploading the image. Please try again.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Product Name:</Text>
            <TextInput
                value={productName}
                onChangeText={setProductName}
                placeholder="Enter product name"
                style={styles.input}
            />

            <Text style={styles.label}>Product Price:</Text>
            <TextInput
                value={productPrice}
                onChangeText={setProductPrice}
                placeholder="Enter product price"
                keyboardType="numeric"
                style={styles.input}
            />

            <Text style={styles.label}>Product Description:</Text>
            <TextInput
                value={productDescription}
                onChangeText={setProductDescription}
                placeholder="Enter product description"
                multiline
                style={[styles.input, styles.textArea]}
            />

            <Text style={styles.label}>Product Category:</Text>
            <TextInput
                value={productCategory}
                onChangeText={setProductCategory}
                placeholder="Enter product category"
                style={styles.input}
            />

            {/* Image Picker Logic Goes Here */}
            {/* You can use a library like react-native-image-picker to implement image selection */}

            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.imagePreview} />
            )}

            <Button title="Upload Image & Create Product" onPress={handleImageUpload} />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        fontSize: 16,
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 16,
    },
});

export default AddProductScreen;
