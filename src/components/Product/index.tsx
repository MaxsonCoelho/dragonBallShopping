import React from 'react';
import * as S from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'; 
import { Image, Text, TouchableOpacity } from 'react-native';

interface ProductList {
    product: Product;
}

interface Product {
    name: string;
    price: string;
    imageURL: string;
}

const Product = ({ product }: ProductList) => {
    console.log(product)
    return (
        <S.Container>
            <Text>{product.name}</Text>
            <Image source={{uri: product.imageURL}} />
        </S.Container>
    )
}

export default Product;