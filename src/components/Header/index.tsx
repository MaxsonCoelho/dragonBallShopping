import React from 'react';
import * as S from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'; 
import { TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <S.Container>
            <TouchableOpacity>
                <Icon name="left" color="#000" size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
                <S.Circle>
                    <S.Number>2</S.Number>
                </S.Circle>
                <Icon name="shoppingcart" color="#000" size={40} />
            </TouchableOpacity>
        </S.Container>
    )
}

export default Header;