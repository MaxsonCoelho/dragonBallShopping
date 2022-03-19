import React from 'react';
import * as S from './styles';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

const Home = () => {
    return (
        <S.Container>
            <Header />
            <Text>Home</Text>
        </S.Container>
    )
}

export default Home;