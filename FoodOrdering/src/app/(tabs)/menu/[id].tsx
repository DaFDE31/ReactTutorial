import {Stack, useLocalSearchParams } from 'expo-router';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import products from '../../../../assets/data/products';
import {defaultImage} from '../../../components/ProductListItem';
import { useState } from 'react';

const ProductDetailsScreen = () => {



    const { id } = useLocalSearchParams();
    const [selectedSize, setSelectedSize] = useState("M");

    const product = products.find((p) => p.id.toString() === id);
    const sizes = ["S", "M", "L", "XL"];

    if (!product){
        return<Text>Product not found</Text>
    }
    return(
        <View style = {style.container}>
            
            <Stack.Screen options={{title: product.name}}/>
            
            <Image source = {{uri : product.image || defaultImage}} style = {style.image}/>
            
            <Text style = {style.select}>Select Size</Text>
            
            
            <Pressable style = {style.sizes} onPress={() => {
                setSelectedSize
            }}>
                {sizes.map((size) => (
                <View 
                style = {[style.size, {backgroundColor: selectedSize === size ? 'gainsboro' : "white"}]} key = {size}
                >
                    <Text style = {[style.sizeText, {color : selectedSize === size ? "black": "gray" }]} >{size}</Text>
                </View>
                ))}
            </Pressable>
            
            
            
            
            <Text style = {style.price}>${product.price}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    price: {
        fontSize: 10,
        fontWeight: "bold",
    },
    select: {

    },
    sizes: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    size: {
        backgroundColor: 'gainsboro',
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    sizeText: {
        fontSize: 20,
        fontWeight: "500",
    },
})

export default ProductDetailsScreen;