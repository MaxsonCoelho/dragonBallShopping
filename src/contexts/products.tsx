
import React, { useState, createContext, useEffect, ReactNode } from 'react';
import api from '../services/api';

interface ProductsProvider {
    children: ReactNode;
}

interface Product {
    name: string;
    price: string;
    imageURL: string;
    idProduct: string;
}


export const ProductContext = createContext({});


export default function ProductProvider({ children }: ProductsProvider){

    const [listProducts, setListProducts] = useState<String[]>([]);
    const [listProductsCart, setListProductsCart] = useState<String[]>([]);
    const [backButton, setBackButton] = useState(false);
    const [loading, setLoading] = useState<Boolean>(true);

    const addProduct = (product: Product) => {

        const newProduct: any = {
            idProduct: product.idProduct,
            name: product.name,
            price: product.price,
            imageURL: product.imageURL,
            done: true,
          }
        
        setListProductsCart(item => [...item, newProduct]);
    }   


    useEffect(() => {
        api.get('/brinquedos.json.js')
        
        .then(response => {
            const array = response.data
            setListProducts(array.items);
        })
    }, [])

    return (
        <ProductContext.Provider value={{ listProducts, loading, addProduct, listProductsCart, setListProductsCart, backButton, setBackButton }}>
            {children}
        </ProductContext.Provider>
    );
}