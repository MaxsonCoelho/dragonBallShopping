
import React, { useState, createContext, useEffect, ReactNode } from 'react';
import api from '../services/api';
import { Alert } from 'react-native';

interface ProductsProvider {
    children: ReactNode;
}

interface Product {
    name: string;
    price: string;
    imageURL: string;
    idProduct: string;
}

interface ContextData {
    listProductsCart: String[];
    listProducts: String[];
    setListProducts: any;
    loading: Boolean;
    addProduct: any;
    setListProductsCart: any;
    backButton: Boolean;
    setBackButton: any;
    removeProduct: any;
}


export const ProductContext = createContext({} as ContextData);


export default function ProductProvider({ children }: ProductsProvider){

    const [listProducts, setListProducts] = useState<String[]>([]);
    const [listProductsCart, setListProductsCart] = useState<any[]>([]);
    const [backButton, setBackButton] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(true);

    const addProduct = (product: Product) => {
        
        const newProductCart: any = {
            idProduct: product.idProduct,
            name: product.name,
            price: product.price,
            imageURL: product.imageURL,
            done: true,
        }
        
        setListProductsCart(item => [...item, newProductCart]);
    }   

    const removeProduct = (idProduct: Product) => {
        setListProductsCart(item => item.filter(
            prod => prod.idProduct !== idProduct
        ))
    } 

    useEffect(() => {
        api.get('/brinquedos.json.js')
        
        .then(response => {
            const array = response.data
            setListProducts(array.items);
        })
    }, [])

    return (
        <ProductContext.Provider value={{ listProducts, setListProducts, loading, addProduct, listProductsCart, setListProductsCart, backButton, setBackButton,
            removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
}