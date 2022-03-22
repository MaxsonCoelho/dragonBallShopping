
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


export const ProductContext = createContext({});


export default function ProductProvider({ children }: ProductsProvider){

    const [listProducts, setListProducts] = useState<String[]>([]);
    const [listProductsCart, setListProductsCart] = useState<String[]>([]);
    const [backButton, setBackButton] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(true);

    const addProduct = (product: Product) => {
        listProductsCart.forEach(item => {
            if(item.idProduct == product.idProduct){
                return Alert.alert('Este brinquedo já foi adicionado ao carrinho deseja remove-lo ?');
            }
        })
        const newProduct: any = {
            idProduct: product.idProduct,
            name: product.name,
            price: product.price,
            imageURL: product.imageURL,
            done: true,
          }
        
        setListProductsCart(item => [...item, newProduct]);
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
        <ProductContext.Provider value={{ listProducts, loading, addProduct, listProductsCart, setListProductsCart, backButton, setBackButton,
            removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
}