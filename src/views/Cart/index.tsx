import React, { useContext, useEffect } from 'react';
import * as S from "./styles";
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { ProductContext } from '../../contexts/products';


const Cart = () => {
    const { setBackButton, listProductsCart, removeProduct } = useContext(ProductContext);

    const executeRemove = (idProduct: string) => {
        removeProduct(idProduct);
    }

    useEffect(()=> {
        setBackButton(true);
    }, [])

    return (
        <S.Container>
            <Header />
            <FlatList
                data={listProductsCart}
                renderItem={({item}) => (
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: '70%', height: 80, backgroundColor:'#ccc', flexDirection: 'row', alignItems: 'center', 
                        borderRadius: 5, marginVertical: 10}} >
                            <Image source={{uri: item.imageURL}} style={{width: 60, height: 60, margin: 10, borderRadius: 5}} />
                            <Text style={{fontSize: 25, fontWeight: 'bold', color:'#000'}}>{item.name}</Text>
                        </View>
                        <TouchableOpacity onPress={() => executeRemove(item.idProduct)} style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#c00404', 
                        borderRadius: 25, marginLeft: 10}}>
                            <Icon name="close" color="#000" size={30} />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.idProduct}
            />
        </S.Container>
    )
}

export default Cart;