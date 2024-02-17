import Colors from '../../src/constants/Colors';
import { StyleSheet , Text, View, Image, Pressable} from 'react-native';
import { Product } from '../types';
import {Link} from 'expo-router';



type ProductListItemProp = {
    product: Product;
}
export const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';


const ProductListItem = ({ product}: ProductListItemProp)=> {
  return (
    <Link href={`/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: product.image || defaultImage}} style = {styles.image} resizeMode='contain'/> 
        <Text style = {styles.title}>{product.name}</Text>
        <Text style = {styles.price}>${product.price}</Text>
        
      </Pressable>
    </Link>
)}

export default ProductListItem
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex:1,
    maxWidth: "50%",
    //margin: 10,
  },
  image:{
    width: "100%",
    //height: 100,
    aspectRatio: 1,
    
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
 /* separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  */
  price: {
    color: Colors.light.tint,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
