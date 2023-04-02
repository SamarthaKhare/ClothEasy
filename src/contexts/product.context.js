/* reason to have a context api for product is since product are stored in firebase database
so we need to make an external call to fetch them hence a side effect also we will need other comp to access it*/
import { createContext, useState } from "react";
import shop_data from '../shop_data.json';

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(shop_data);
    const value = { products } // we want other comp to access products if req
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}