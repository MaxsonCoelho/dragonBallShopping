
import React, { useState, createContext, useEffect, ReactNode } from 'react';
import api from '../services/api';

interface ProductsProvider {
    children: ReactNode;
}


export const ProductContext = createContext({});


export default function ProductProvider({ children }: ProductsProvider){

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const addProduct = (id: string) => {
        console.log(id);
    }   


    useEffect(() => {
        api.get('/brinquedos.json.js')
        
        .then(response => {
            const array = response.data
            setProductList(array.items);
        })
    }, [])

    return (
        <ProductContext.Provider value={{ productList, loading, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
}