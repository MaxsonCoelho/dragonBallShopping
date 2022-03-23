import React, { useContext, useEffect, useState } from 'react';
import * as S from "./styles";
import { Modal, TouchableOpacity, View } from 'react-native';
import { ProductContext } from '../../contexts/products';
import Icon from 'react-native-vector-icons/AntDesign'; 

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
    const [modalVisible, setModalVisible] = useState<Boolean>(false);

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
            <Modal 
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={()=> setModalVisible(false)}
            >
                <S.ContainerModal >
                    <View style={{alignItems:'center', justifyContent:'center', width: '80%', height: '80%', backgroundColor:'#fff', borderRadius: 5}}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{borderWidth: 1, borderColor: '#c00404', top: 10, right: 10,
                        borderRadius: 25, marginLeft: 10, position: 'absolute', zIndex: 2, }}>
                            <Icon name="close" color="#000" size={30} />
                        </TouchableOpacity>
                        <S.ImagePersonModal source={{uri: product.imageURL}} resizeMode="contain"/>
                    </View>
                </S.ContainerModal>
            </Modal>
            <TouchableOpacity onPress={()=> setModalVisible(true)} style={{alignItems:'center', justifyContent:'center', width: 110, height: 150, backgroundColor:'#fff', borderRadius: 5}}>
                <S.ImagePerson source={{uri: product.imageURL}} />
            </TouchableOpacity>
            <View style={{backgroundColor:'#FF8000', justifyContent:'space-between', alignItems: 'center', width: 140, height: 35, flexDirection:'row', 
            paddingHorizontal: 5, borderRadius: 5, position: 'absolute', top: -30}}>
                <S.NamePerson>{product.name}</S.NamePerson>
                <S.PricePerson>  R$:{product.price}</S.PricePerson>
            </View>
                <TouchableOpacity onPress={() => execAddProduc(product)} style={{backgroundColor:activeProduct || product.done == true ? '#00FF00' : '#FF4000', width:140, alignItems:'center', 
                justifyContent: 'center', height: 30, borderRadius: 5}}>
                    <S.Add>{activeProduct ? 'Adicionar' : 'Remover' }</S.Add>
                </TouchableOpacity>
        </S.Container>
    )
}

export default Product;