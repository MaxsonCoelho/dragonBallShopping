import React, { useContext } from 'react';
import * as S from './styles';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import { ProductContext } from '../../contexts/products';
import Product from '../../components/Product';


const Home = () => {

    const { productList } = useContext(ProductContext);
    console.log(productList)

    return (
        <S.Container>
            <Header />
            <FlatList
                data={productList}
                renderItem={item => <Product product={item.item} />}
                keyExtractor={item => item.idProduct}
            />
        </S.Container>
    )
}

export default Home;