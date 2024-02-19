import { PropsWithChildren, createContext, useContext ,useState} from "react";
import { CartItem, Product} from "../types";

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem["size"]) => void;
    //adds an item of product(of type product from type file) and a size from 
    //type size in the CartItem array
};

const CartContext = createContext<CartType>({
    items: [],
    addItem: () =>{},
});


const CartProvider = ({children} : PropsWithChildren) =>{
    const [items, setItems] = useState<CartItem[]>([]);
    const addItem = (product: Product, size: CartItem["size"]) => {
        //Overides for CartContext
        

        const newCartItem: CartItem = {
            id: "1",
            product,
            product_id: product.id,
            size,
            quantity: 1,
        };
        setItems([newCartItem, ...items]);
        //console.log(product);

    };
    return(
        <CartContext.Provider value = {{items, addItem}}>
            {children}
        </CartContext.Provider>
);};
//CartContext.Consumer;
export default CartProvider;

export const useCart = () => useContext(CartContext);