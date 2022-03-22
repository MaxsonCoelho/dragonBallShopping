import styled from 'styled-components/native';


export const Container = styled.View`
flex: 1 ;
background-color: #fff;
`

export const ProductsList = styled.FlatList.attrs({
    contentContainerStyle: {
      paddingTop: 20,
      paddingBottom: 10,
    },
    columnWrapperStyle: {
      marginHorizontal: 30,
      justifyContent: 'space-between',
    },
  })``;
  

export const Add = styled.Text`
color: #fff ;
font-weight: bold ;
font-size: 17 ;
`


