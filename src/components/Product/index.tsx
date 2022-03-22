import React, { useContext } from 'react';
import * as S from "./styles";
import { TouchableOpacity, View } from 'react-native';
import { ProductContext } from '../../contexts/products';

interface ProductList {
    product: any;
}

interface Product {
    name: string;
    price: string;
    imageURL: string;
    idProduct: string;
}

const Product = ({ product }: ProductList) => {

    const { addProduct } = useContext(ProductContext);

    const execAddProduc = (product: string) => {
        addProduct(product);
        
    }

    return (
        <S.Container>
            <TouchableOpacity style={{alignItems:'center', justifyContent:'center', width: 110, height: 150, backgroundColor:'#fff', borderRadius: 5}}>
                <S.ImagePerson source={{uri: product.imageURL}} />
            </TouchableOpacity>
            <View style={{backgroundColor:'#FF8000', justifyContent:'space-between', alignItems: 'center', width: 140, height: 35, flexDirection:'row', 
            paddingHorizontal: 5, borderRadius: 5, position: 'absolute', top: -30}}>
                <S.NamePerson>{product.name}</S.NamePerson>
                <S.PricePerson>  R$:{product.price}</S.PricePerson>
            </View>
            <TouchableOpacity onPress={() => execAddProduc(product)} style={{backgroundColor:'#00FF00', width:140, alignItems:'center', justifyContent: 'center', height: 30, borderRadius: 5}}>
                <S.Add>Add</S.Add>
            </TouchableOpacity>
        </S.Container>
    )
}

export default Product;