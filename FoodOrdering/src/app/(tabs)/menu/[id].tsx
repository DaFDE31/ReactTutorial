import {Stack, useLocalSearchParams } from 'expo-router';// imports stack and uselocalsearch params to create v 
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'// Imports View, Text, Image, StyleSheet,and Pressable for all their uses. 
import products from '../../../../assets/data/products';//imports products: the list of pizzas and their traits
import {defaultImage} from '../../../components/ProductListItem'; // Imports the default image in case there is not one for the selecred pizza
import { useState } from 'react';// imports useState from react so we can switch sizes
import Button from "../../../components/Button"; // Creates a button to be used later to add to cart.
import { useCart } from '../../../providers/CartProvider'; //Imports the useCart function
import { PizzaSize } from '../../../types';// Imports the Pizza size type made in types.ts so a person can select the size of their pizza

const ProductDetailsScreen = () => {// A function that creates the detail screen for each pizza.

    const { id } = useLocalSearchParams();// a constant using the specific id to talk about which pizza is selected
    const [selectedSize, setSelectedSize] = useState<PizzaSize>("M"); //selectedSize and setSelectedSize that will pick which size is currently selected
    const product = products.find((p) => p.id.toString() === id); // Creates a product variable to be used on this file named after the item passed in at the time
    const sizes: PizzaSize[] = ["S", "M", "L", "XL"]; // Array of the Pizza sizes
    const {addItem} = useCart(); //uses addItem made in CartProvider.tsx to use the useCart() function
    

    if (!product){// If there is not a product, display "Product not found"
        return<Text>Product not found</Text>
    }
    const addToCart = () => {// addToCart fuction that calls addItem to bring the item to the cart.
        if (!product){return;} // If there is no product, return nothing and end
        addItem(product, selectedSize);// calls add item using useCart
        //Calls the useCart item made in Cart provider
    };
    return(
        //Creates a view for the whole page using the container style
        <View style = {style.container}>
            
            <Stack.Screen options={{title: product.name}}/>
            {/*Uses Stack screen and options to create a header for each pizza id screen*/}
         
            <Image source = {{uri : product.image || defaultImage}} style = {style.image}/>
            {/*Uses the URI to put a picture of either the selected pizza or a default image*/} 
            
            <Text style = {style.select}>Select Size</Text>
            {/*Types select size using select style */}
            
            
            <View style = {style.sizes}>
                {/* Creates another view for the sizes using their style*/}
                {sizes.map((size) => (
                    //Maps the sizes to make each 
                <Pressable onPress={() => {setSelectedSize(size);}}
                //When a size is pressed, it calls setSelected Size to turn the pressed one into the selected size
                style = {[style.size, {backgroundColor: selectedSize === size ? 'gainsboro' : "white"}]} key = {size}
                // Uses the individual size style to format the letters and their backgrounds. 
                //If the size is currently selected, the background is changed to a gainsboro color.
                >
                    <Text style = {[style.sizeText, {color : selectedSize === size ? "black": "gray" }]} >{size}</Text>
                    {/*Creates a stlye for each letter and makes them black if selected.*/} 
                </Pressable>
                ))}
            </View>
            
            <Text style = {style.price}>${product.price}</Text>
            {/**Creates a style for and displays the price of the selecred pizza. */}

            <Button text = "Add to cart" onPress={addToCart}/>
            {/**Creates a button that says Add to cart that calls the function of the same name on press
             * It is essentially what a person will press to add a pizza to their cart.*/}
        </View>
    );
};

//Creates the styles to be used here
const style = StyleSheet.create({
    //Creates the style for the whole page container
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 10,        
    },
    //Creates the style for the pizza image
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    //Creates the style for the price of the pizza
    price: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: "auto",
        
    },
    //Creates the style for the SelectSize text
    select: {
        fontSize: 20,
        justifyContent: "center",
        //width: 300,
        //backgroundColor: "blue",
        textAlign: "center",
        paddingBottom: 15,
        
    },
    //Creates the style for all four sizes to be aligned
    sizes: {
       
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    //Creates the style for the background of the sizes
    size: {
        backgroundColor: 'gainsboro',
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    //Creates the style for the text of the sizes
    sizeText: {
        fontSize: 20,
        fontWeight: "500",
    },
})

export default ProductDetailsScreen;//Exports this entire function and screen