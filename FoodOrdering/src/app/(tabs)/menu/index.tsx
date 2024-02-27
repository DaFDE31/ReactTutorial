import {View, FlatList} from 'react-native'; //Imports the view and flatlist tags to be the main used ones 
import products from '../../../../assets/data/products'; //imports products: the list of pizzas and their traits
import ProductListItem from '../../../components/ProductListItem';// Imports productlistitem which dictates how each product  looks on  the selection screen
//import EditScreenInfo from '@/src/components/EditScreenInfo';
//import { Text, View } from '@/src/components/Themed';



export default function MenuScreen() { // Creates a default function called MenuScreen for the orignal menu screen.
  return (
    <View>{}
      <FlatList
      //The data for the flatlist is the list of products
        data = {products}//
        renderItem={({item }) => <ProductListItem product = {item}/>}// This renders each item in the flatlist
        numColumns={2}// The groups them into two columns

        //These lines are two styles for the content of each product box and the columns
        contentContainerStyle={{ gap:10 , padding: 10}}
        columnWrapperStyle = {{gap : 10}}

      />
    </View>
    
  );
}