import React, { useContext } from 'react';
import * as S from './styles';
import { FlatList, View } from 'react-native';
import Header from '../../components/Header';
import { ProductContext } from '../../contexts/products';
import Product from '../../components/Product';


const Home = () => {

    const { productList } = useContext(ProductContext);


    return (
        <S.Container>
            <Header />
            <View style={{backgroundColor:'#ccc', width:'100%', paddingHorizontal:30, paddingTop:20, flex: 1}}>
                <S.ProductsList
                    horizontal={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={productList}
                    renderItem={item => (
                        <Product product={item.item} />
                    )}
                    keyExtractor={item => String(item.idProduct)}
                />
            </View>
        </S.Container>
    )
}

export default Home;