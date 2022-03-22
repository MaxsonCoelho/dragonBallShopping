import React, { useContext, useState } from 'react';
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

    const { addProduct, removeProduct } = useContext(ProductContext);
    const [activeProduct, setActiveProduct] = useState<Boolean>(true);

    const execAddProduc = (product: string) => {
        if(activeProduct == true){
            addProduct(product);
            setActiveProduct(false);
            return
        }else {
            setActiveProduct(true);
            removeProduct(product.idProduct);
            return
        }
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
            
                {activeProduct ? 
                    <TouchableOpacity onPress={() => execAddProduc(product)} style={{backgroundColor:'#00FF00', width:140, alignItems:'center', 
                    justifyContent: 'center', height: 30, borderRadius: 5}}>
                        <S.Add>Adicionar</S.Add>  
                    </TouchableOpacity>
                :
                    <TouchableOpacity onPress={() => execAddProduc(product)} style={{backgroundColor:'#97030bf0', width:140, alignItems:'center', 
                    justifyContent: 'center', height: 30, borderRadius: 5}}>
                        <S.Add>Remover</S.Add>  
                    </TouchableOpacity>
                }
            
        </S.Container>
    )
}

export default Product;