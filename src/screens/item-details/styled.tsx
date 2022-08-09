import styled from 'styled-components/native';
import colors from '../../constants/colors';
import {IStyles} from "./types"

export const Category = styled.View`
    background-color: ${colors.white};
    padding: 5px;
    borderRadius: 10px;
    marginVertical: 10px;
    width: 50%
`
export const Text = styled.Text`
    font-size: ${(props: IStyles) => props.fontSize ? props.fontSize : "14px"};
    font-weight: ${(props: IStyles) => props.fontWeight ? props.fontWeight : "400"};
    color: ${(props: IStyles) => props.color ? props.color : "#000"};
    text-align: ${(props: IStyles) => props.textAlign ? props.textAlign : "left"};
    margin-top: ${(props: IStyles) => props.marginTop ? props.marginTop : "7px"};
    margin-bottom: ${(props: IStyles) => props.marginBottom ? props.marginBottom : "7px"};
`
export const Image = styled.Image`
    width: 100%;
    height: 300px;
    borderRadius: 10px
`
export const IconContainer = styled.View`
    margin-vertical: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between
`
export const Rating = styled.View`
    margin-vertical: 10px;
    flex-direction: row;
    align-items: center;
`