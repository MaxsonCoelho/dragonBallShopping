import React, { useContext } from 'react';
import * as S from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'; 
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from '../../contexts/products';


const Header = () => {
    const navigation = useNavigation();
    const { backButton, setBackButton, listProductsCart } = useContext(ProductContext);

    const carNavigation = () => {
        navigation.navigate('Cart');
    }

    const back = () => {
        navigation.goBack();
        setBackButton(false);
    }

    return (
        <S.Container>
            {backButton ?
                <TouchableOpacity onPress={back} style={{ padding: 10, position: 'absolute', left: 10 }}>
                    <Icon name="left" color="#000" size={30} />
                </TouchableOpacity>
            :
                null
            }
            <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold', marginLeft:backButton == true ? 50: 10}}>DragonBall Shopping</Text>
            <TouchableOpacity onPress={carNavigation} style={{ padding: 10, position: 'absolute', right: 10 }}>
                <S.Circle>
                    <S.Number>{listProductsCart.length}</S.Number>
                </S.Circle>
                <Icon name="shoppingcart" color="#000" size={40} />
            </TouchableOpacity>
        </S.Container>
    )
}

export default Header;