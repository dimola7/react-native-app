import colors from "../../constants/colors";
import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    background-color: ${colors.grey};
    margin-bottom: 60px
`
export const List = styled.FlatList`
    width: 100%;
    margin-top: 10px;
    padding-bottom: 5px
`
export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
    width: 100%
`